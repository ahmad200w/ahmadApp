import {
  Alert,
    Animated,
    Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { apiOrder, orderData } from '../../api';
import VisaCard from '../Components/VisaCard';
import Total from '../Components/Total';
import { handleCcvChange, handleTextChange } from '../helpers';
import VisaCardInput from '../Components/VisaCardInput';
import { sendOrdertoDatabase } from '../useOrder';

const Payments = () => {
    const tab = createMaterialTopTabNavigator()
  const {width, height} = useWindowDimensions();
  const [cardInput, setCardInput] = useState();
  const [expiryDate, setExpiryDate] = useState(0);
  const [ccv, setCcv] = useState(0);
  const [open,setOpen]= useState(false)
  const router = useRoute()
  const navigation = useNavigation();
  const data = router.params.sendOrdersDatails
 
  const total = router.params.total
/*
  const printTheUser = async () => {
    try {
      const data = await AsyncStorage.getItem("emailLogin");
      if (data) {
        const userAndEmail = JSON.parse(data);
        const { userName, email } = userAndEmail;
    
        // إرجاع القيم
        return { userName, email };
      } else {
        console.log("data no exist ...");
        return { userName: null, email: null };
      }
    } catch (error) {
      console.log("Error:", error);
      return { userName: null, email: null };
    }
  };
  

 
const sendOrdertoDatabase = async () => {
  try {
    // استرجاع بيانات المستخدم من AsyncStorage
    const userData = await printTheUser();
    
   
    const orders = router.params.sendOrdersDatails;
    const total = router.params.total;

    // التحقق من أن userData يحتوي على البيانات الضرورية
    if (!userData.userName || !userData.email) {
      throw new Error('User data is incomplete');
    }

    // إرسال الطلب إلى قاعدة البيانات
    const { data, status } = await apiOrder(userData.userName, userData.email, orders, total);

    // التحقق من نجاح الطلب
    if (status === 200) {
      console.log("Order sent successfully:", data);
    } else {
      console.log("Failed to send order. Status code:", status);
      console.log("Error details:", data);
    }

  } catch (error) {
    console.log("Error 500 ...", error);
  }
};




 
*/

const handleSendOrder = async () => {
  const result = await sendOrdertoDatabase(data, total);
  console.log(result)
  if (result) {
    Alert.alert("Order sent successfully:", result);
    /*
    setTimeout(() => {
      navigation.navigate("Home")
    }, 5000);
    */
    
  } else {
    Alert.alert("Failed to send order:", result.error);
  }
};

 
  



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
      <Total open={open} total={total} handleSendOrder={handleSendOrder} setOpen={setOpen} />
      <Pressable style={styles.sendButton} onPress={handleSendOrder}>
        <Text style={styles.sendButtonText}>Send Order</Text>
      </Pressable>
     
    </SafeAreaView>
  );

}
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
  },sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
