
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { apiOrder } from '../api';

// استرجاع بيانات المستخدم من AsyncStorage
export const printTheUser = async () => {
  try {
    const data = await AsyncStorage.getItem("emailLogin");
    if (data) {
      const userAndEmail = JSON.parse(data);
      const { userName, email } = userAndEmail;

      // إرجاع القيم
      return { userName, email };
      console.log(userName,email);
    } else {
      console.log("data no exist ...");
      return { userName: null, email: null };
    }
  } catch (error) {
    console.log("Error:", error);
    return { userName: null, email: null };
  }
};

// إرسال الطلب إلى قاعدة البيانات
export const sendOrdertoDatabase = async (orders, total) => {
  try {
    // استرجاع بيانات المستخدم من AsyncStorage
    const userData = await printTheUser();

    // التحقق من أن userData يحتوي على البيانات الضرورية
    if (!userData.userName || !userData.email) {
      throw new Error('User data is incomplete');
      Alert.alert("userName or Email not exist ..")
    }

    // إرسال الطلب إلى قاعدة البيانات
    const data = await apiOrder(userData.userName, userData.email, orders, total);

    // التحقق من نجاح الطلب

      return  data
  

  } catch (error) {
    console.log("Error 500 ...", error);
    return { success: false, error };
  }
};
