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
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToRegister = () => {
    navigation.navigate('register');
  };
  
  const {login}=useLogin();

  const handelLogin =async()=>{

    await login(user,email,password);
    await printTheUser()
  }

  const printTheUser = async ()=>{

    try{
      const data = await AsyncStorage.getItem("emailLogin")
      let copyOfData = JSON.parse(data)
      console.log("the object is ",copyOfData)

    }
    catch(error){

      console.log("error",error)


    }


  }


  return (
    <SafeAreaView style={{backgroundColor: '#332C39'}}>
      <View style={styles.body}>
        <View style={styles.unterBody}>
          <Text style={styles.Welcome}> HandyStore</Text>
          <Text style={styles.text}>User</Text>
          <TextInput
            value={user}
            style={styles.userInput}
            onChangeText={text => setUser(text)}
            placeholder="Enter Email"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            value={email}
            style={styles.emailInput}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
          />
          <Text style={styles.text}>Pass</Text>
          <TextInput
            value={password}
            style={styles.passInput}
            onChangeText={text => setPassword(text)}
            placeholder="Enter Pass"
          />
          <View style={styles.knopfBody}>
            <TouchableOpacity onPress={goToRegister} style={styles.registerK}>
              <Text style={styles.textTK}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handelLogin}
              style={styles.loginK}>
              <Text style={styles.textTK}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#332C39',
  },
  unterBody: {
    backgroundColor: '#609EA2',
    width: '90%',
    height: '80%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Welcome: {
    marginBottom: 80,
    right: 3,
    fontWeight: '900',
    fontSize: 48,
    color: '#332C39',
  },
  userInput: {
    // borderWidth:0.5,
    width: '80%',
    height: '9%',
    borderRadius: 3,
    margin: 7,
    padding: 5,
    borderStartWidth: 0,
    borderBottomWidth: 2,
  },
  emailInput: {
    // borderWidth:0.5,
    width: '80%',
    height: '9%',
    borderRadius: 3,
    margin: 7,
    padding: 5,
    borderStartWidth: 0,
    borderBottomWidth: 2,
  },

  passInput: {
    // borderWidth:0.5,

    width: '80%',
    height: '9%',
    borderRadius: 3,
    padding: 5,
    borderStartWidth: 0,
    borderBottomWidth: 2,
  },
  text: {
    right: 120,
    fontSize: 15,
    fontWeight: '900',
  },
  knopfBody: {
    flexDirection: 'row',
    margin: 20,
  },
  registerK: {
    width: 120,
    height: 50,
    backgroundColor: '#332C39',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  loginK: {
    width: 120,
    height: 50,
    backgroundColor: '#332C39',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTK: {
    color: '#609EA2',
    fontSize: 16,
    fontWeight: '600',
  },
});
