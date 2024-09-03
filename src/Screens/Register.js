import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {apiRegister, baseURL} from '../../api';
import Navi from '../router/Navi';
import {useNavigation} from '@react-navigation/native';
import useRegister from './hooks/useRegister';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // sende die Daten
  const loginWithData = () => {
    navigation.navigate('login');
  };

  const {register} = useRegister();
  const handelRegister = async () => {
    await register(username, email, password);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View 
      
      style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Register</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            style={styles.usernameInput}
            onChangeText={setUsername}
            placeholder="Enter Username"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            style={styles.emailInput}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            style={styles.passwordInput}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handelRegister} style={styles.registerButton}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate("login")} style={styles.registerButton}>
              <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#332C39',
  },
  mainContainer: {
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
    fontSize: 40,
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
  usernameInput: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: '#333',
  },
  emailInput: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: '#333',
  },
  passwordInput: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: '#333',
  },
  buttonContainer: {
    marginTop: 20,
  },
  registerButton: {
    width: 250,
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