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


  const formatNumberWithSpaces = value => {
    // استخدام replace لوضع مسافة كل 3 أرقام
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleTextChange = text => {
    // التحقق من أن النص يحتوي على أرقام فقط
    const numericValue = text.replace(/[^0-9]/g, '');

    // التحقق من أن النص لا يتجاوز 10 أرقام
    const truncatedValue = numericValue.slice(0, 12);
    const formattedValue = formatNumberWithSpaces(truncatedValue);

    setCardInput(formattedValue);
  };

  const handleCcvChange = text => {
    // يتحقق من أن القيمة تحتوي على 3 أرقام وتكون أرقامًا فقط
    const ccvRegex = /^\d{0,3}$/;

    if (ccvRegex.test(text)) {
      setCcv(text);
    }
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

        const order = data; // تأكد من أن هذه البيانات تأتي بالتنسيق المطلوب
        const orders =   {
            username: username, // انظر هنا، يجب أن تكون userName وليس username
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
        // يمكنك إدراج التعامل مع الأخطاء هنا
    }
};
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.visaBody,
          {
            backgroundColor: 'black',
            width: 0.85 * width,
            height: height * 0.27,
            borderRadius: 30,
          },
        ]}>
        <Text style={styles.visa}>VISA</Text>
        <Text style={styles.visaNumber}>{cardInput}</Text>
        <View style={styles.moreDateils}>
          <View style={styles.visaPay}>
            <Text style={styles.visaA}>VISA</Text>
            <Text style={styles.visaB}>Pay</Text>
          </View>
          <Text style={styles.Exdate}>{expiryDate}</Text>
        </View>
      </View>
      <View style={styles.inputStyle}>
        <Text style={styles.cardNummerStyle}>CARD NUMER</Text>
        <TextInput
          style={styles.cardinput}
          placeholder="***"
          value={cardInput}
          onChangeText={handleTextChange}
        />
      </View>
      <View style={styles.secoundinputStyle}>
        <TextInput
          style={styles.cvv}
          placeholder="MM/YY"
          keyboardType="numeric"
          maxLength={5}
          value={expiryDate}
          onChangeText={handleDateChange}
        />

        <TextInput
          style={styles.cvv}
          placeholder="Ccv"
          value={ccv}
          onChangeText={handleCcvChange}
        />
      
      </View>

      {  open ? (<View style={styles.total}>
        <TouchableOpacity onPress={()=> sendTheOrderWithId()} style={styles.payArrow}>
            <Image style={styles.arrow} source={require('../assets/right-arrow.png')}/>
        </TouchableOpacity>
        <View>
      <Text style={styles.totalText}>Total</Text>
      <Text style={styles.totalText}>{total}$</Text>
      </View>
    
      </View>):(<Text style={styles.fillText}>fill Card Info</Text>)}
     
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  visaBody: {
    backgroundColor: 'black',
    borderRadius: 30,
    alignItems: 'center',
  },
  visa: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    left: 80,
    padding: 15,
    marginTop: 15,
  },
  visaNumber: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    marginTop: 15,
  },
  moreDateils: {
    flexDirection: 'row',
    marginTop: 30,
  },
  visaA: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '800',
  },
  visaPay: {
    flexDirection: 'row',
    marginRight: 80,
  },
  visaB: {
    color: '#FEBE10',
    fontSize: 25,
    fontWeight: '800',
    marginRight: 2,
  },
  Exdate: {
    color: 'yellow',
    fontSize: 25,
    fontWeight: '800',
    marginLeft: 22,
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
  },total:{
    marginTop:250,
    width:300,
    height:100,
    backgroundColor:'black',
    borderRadius:100,
    justifyContent:'center'
    ,flexDirection:'row'
    ,alignItems:'center'
  },
  totalText:{
    color:'white',
    fontSize:20,
    fontWeight:'900',
    left:50,
    
  },
  payArrow:{
    width:50,
    height:50,
    borderRadius:30,
    backgroundColor:'white',
    
    right:60,
    justifyContent:'center',
    alignItems:'center'
  },
  arrow:{
    width:40,
    height:40
  },fillText:{
    fontSize:30,
    fontWeight:'900',
    marginTop:300
  }
});
