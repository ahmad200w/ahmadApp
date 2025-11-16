import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {apiLogin} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLogin from './hooks/useLogin';

const Login = () => {
  const navigation = useNavigation();
  
  // تذيكر لبناء object بدل وضع كل وحد لوحده {user,email,password }
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToRegister = () => {
    navigation.navigate('register');
  };

  const {login} = useLogin();

  const handelLogin = async () => {
    await login(user, email, password);
    await printTheUser();
  };

  const printTheUser = async () => {
    try {
      const data = await AsyncStorage.getItem('emailLogin');
      if (data) {
        const parsedData = JSON.parse(data);

        const {userName, email, orders} = parsedData;
        console.log('name ', userName);
        console.log('email : ', email);
        console.log('email : ', orders);
      } else {
        console.log('keine Data');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>PhoneStore</Text>
          <Text style={styles.label}>User</Text>
          <TextInput
            value={user}
            style={styles.input}
            onChangeText={text => setUser(text)}
            placeholder="Enter Username"
            keyboardType={'email-address'}
            autoCapitalize="none"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={text => setPassword(text)}
            placeholder="Enter Password"
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={goToRegister}
              style={styles.registerButton}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handelLogin} style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#332C39',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#609EA2',
    width: '90%',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#332C39',
    marginBottom: 40,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 15,
    fontWeight: '900',
    marginVertical: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 3,
    marginVertical: 7,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerButton: {
    width: 120,
    height: 50,
    backgroundColor: '#332C39',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  loginButton: {
    width: 120,
    height: 50,
    backgroundColor: '#332C39',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#609EA2',
    fontSize: 16,
    fontWeight: '600',
  },
});
