import { Alert } from 'react-native';
import React from 'react';
import { apiRegister } from '../../../api';
import { useNavigation } from '@react-navigation/native';

const useRegister = () => {
  const navigation = useNavigation();

  const register = async (user, email, password) => {

    const success = handleInputErrors(user,email,password);
    if(!success) return;
    const emailCheck = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailOrPasswordEmpty = email.trim().length === 0 || password.trim().length === 0;
      if (isEmailOrPasswordEmpty) {
        return 'Email or password is not complete';
      } else if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.';
      }
      return false;
    };

    // Check for errors
    const error = emailCheck();
    if (error) {
      Alert.alert(error);
      return;
    }

    try {
      const res = await apiRegister(username, email, password);
      if (!res) {
        Alert.alert('User registration failed');
      } else {
        navigation.navigate('login');
      }
    } catch (err) {
      Alert.alert('An error occurred during registration');
    }
  };

  const handleInputErrors = (username, password, email) => {
    if (!username || !email || !password) {
      Alert.alert('Please fill in all fields');
      return false;
    }
    return true;
  };

  return { register, handleInputErrors };
};

export default useRegister;
