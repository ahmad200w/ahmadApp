import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiLogin } from '../../../api'; // تأكد من صحة المسار

const useLogin = () => {
  const navigation = useNavigation();

  const login = async (user, email, password) => {
    try {
      const success = handleInputErrors(user, password, email);
      if (!success) return;

      const data = await apiLogin(user, email, password);
      console.log('Data received from server:', data);

      if (data.error) {
        throw new Error(data.error);
      }

      await AsyncStorage.setItem('emailLogin', JSON.stringify(data));
      navigation.navigate('Home');
      
    } catch (error) {
      Alert.alert("Error", error.message || "An unexpected error occurred.");
      console.log('Login error:', error);
    }
  };

  const handleInputErrors = (user, password, email) => {
    if (!user || !email || !password) {
      Alert.alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  return { login };
};

export default useLogin;
