import {
    Animated,
    Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { orderData } from '../../api';
import VisaCard from '../Components/VisaCard';
import Total from '../Components/Total';
import { handleCcvChange, handleTextChange } from '../helpers';
import VisaCardInput from '../Components/VisaCardInput';

const Payments = () => {
    const tab = createMaterialTopTabNavigator()
  const {width, height} = useWindowDimensions();
  const [cardInput, setCardInput] = useState();
  const [expiryDate, setExpiryDate] = useState(0);
  const [ccv, setCcv] = useState(0);
  const [open,setOpen]= useState(false)
  const router = useRoute()
  const data = router.params.printProduct
 
  const total = router.params.total

  const fetchToken = async () => {
    try {
      const afterToken = await AsyncStorage.getItem("emailLogin");
      const parsedToken = JSON.parse(afterToken);
  
      console.log("Parsed Token:", parsedToken); // تحقق من قيمة parsedToken
  
      if (parsedToken && parsedToken.username && parsedToken.email && parsedToken.password) {
        return parsedToken;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };
    



 


  const full = () => {
    if (cardInput  !== 0 && ccv !== 0 && expiryDate !== 0) {
      setOpen(true);
    }else{
        setOpen(false)
    }
  };
  useEffect(() => {
  full();
  },[cardInput,ccv,expiryDate] );
  

  const sendData = async()=>{


  }

  const handelCardInput = inputNumber =>{
    const inputCardNumber =handleTextChange(inputNumber)
    setCardInput(inputCardNumber)
  }


  const handelCcv = inputCcv => {
    const ccvCheckLimit =handleCcvChange(inputCcv)
    setCcv(ccvCheckLimit)
  };

  const handleDateChange = text => {
    // الشرط: رقمين قبل "/" لا يتجاوزان 12، ورقمين بعد "/" ويمنع الأحرف والأصفار الزائدة
    const dateRegex = /^\d{0,2}(\/\d{0,2})?$/;

    if (dateRegex.test(text)) {
      setExpiryDate(text);
    } else if (text.length === 2 && !text.includes('/')) {
      setExpiryDate(text + '/');
    }
  };


  const sendTheOrderWithId = async () => {
    try {
        const tokenData = await fetchToken();
        const { username, email, password } = tokenData;

        const order = data; 
        const orders =   {
            username: username,
            email: email,
            password: 54321,
             orders: order.map(item => ({
                quantity: item.quantity,
                phoneType: item.phoneType,
                total: item.total
            })),
            total: total
        };

        const result = await orderData(orders);

        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
      
    }
};
  return (
    <SafeAreaView style={styles.body}>
    <VisaCard 
    cardInput={cardInput}
     expiryDate={expiryDate} 
      />
      <VisaCardInput
      handelCardInput={handelCardInput}
       handleDateChange={handleDateChange} 
       handleCcvChange={handleCcvChange}
       cardInput={cardInput}
       expiryDate={expiryDate}
       ccv={ccv}

       />
      <Total open={open} total={total}/>
     
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    marginTop: 30,
  },
  cardinput: {
    width: 250,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
    fontSize: 25,
    fontWeight: '600',
    backgroundColor: '#F0EEED',
  },
  cardNummerStyle: {
    fontSize: 22,
    fontWeight: '600',
  },
  cvv: {
    width: 100,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
    fontSize: 25,
    fontWeight: '600',
    backgroundColor: '#F0EEED',
    margin: 2,
  },
  secoundinputStyle: {
    flexDirection: 'row',
    marginTop: 30,
    left: 22,
  }
});
