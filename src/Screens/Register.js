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
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.unterBody}>
          <Text style={styles.background}>Register</Text>
          <Text style={styles.text}>UserName</Text>
          <TextInput
            value={username}
            style={styles.textEmail}
            onChangeText={setUsername}
            placeholder="Enter Email"
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            value={email}
            style={styles.textEmail}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
          <Text style={styles.text}>Pass</Text>
          <TextInput
            value={password}
            style={styles.textPass}
            onChangeText={setPassword}
            placeholder="Enter Pass"
          />

          <View style={styles.knopfBody}>
            <TouchableOpacity onPress={handelRegister} style={styles.loginK}>
              <Text style={styles.textTK}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#332C39',
  },
  textusername: {
    right: 100,
    fontSize: 15,
    fontWeight: '900',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#332C39',
  },
  background: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 40,
  },
  unterBody: {
    backgroundColor: '#609EA2',
    width: '90%',
    height: '80%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEmail: {
    borderWidth: 0.5,
    width: '80%',
    height: '9%',
    borderRadius: 10,
    margin: 7,
    padding:5,
  },

  textPass: {
    borderWidth: 0.5,
    width: '80%',
    height: '9%',
    borderRadius: 10,
    padding:5,

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
  loginK: {
    width: 250,
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
