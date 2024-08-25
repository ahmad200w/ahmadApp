import { Alert } from "react-native";

export const baseURL = 'http://localhost:4900';

//https://ka-zkkx.onrender.com

const fetchApi = async (link, method , body) => {
  const url = baseURL + link;

  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined, 
    });

    if (!response.ok) {
      const errorText = await response.text(); // استخدم text() للحصول على تفاصيل الخطأ
      throw new Error(errorText || 'Network response was not ok');
    }

    // حاول تحويل الاستجابة إلى JSON
    try {
      const data = await response.json();
      return data;
    } catch (parseError) {
      throw new Error('Failed to parse JSON response');
    }
  } catch (error) {
    console.error('fetchApi error:', error);
    throw error; // إعادة رمي الخطأ للتعامل معه في المستوى الأعلى
  }
};

export const apiLogin = async (user, email, password) => {
  const link = '/Login';

    const body =  {
      userName: user,
      email: email,
      password: password,
    }
    return await fetchApi(link, 'POST',body);;
  

};


export const apiRegister = async (userName, email, password) => {
  const link = '/Register';
  body = {
    userName: userName,
    email: email.toLowerCase(),
    password: password,
  };
  return await fetchApi(link, 'POST', body);
};


export const apiOrder = async (userName, email, orders, total) => {
  const link = "/sendOrder";
  const body = {
    userName,
    email: email.toLowerCase(),
    orders,
    total,
  };

  try {
   return await fetchApi(link, 'POST', body);

  } catch (error) {
    Alert.alert("network Error", error);
    throw error; 
  }
};