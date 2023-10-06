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
import Navigation from '../../scrs/Navigation';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // sende die Daten
  const loginWithData = () => {
    navigation.navigate('login');
  };
  const emailCheck = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailUPassEmpty =
      email.trim().length == 0 || password.trim().length == 0;
    if (isEmailUPassEmpty) {
      return 'email oder password ist nicht vollständig';
    } else if (!emailRegex.test(email)) {
      return 'tipp die richtige Email ein .';
    }
    return false;
  };



  const register = () => {
    let erroMassnahme = emailCheck();
    if (erroMassnahme) {
      Alert.alert(erroMassnahme);
      return;
    }

    apiRegister(email, password)
      .then(res => {
        console.log('reg res: ' , res);
        if (!res) {
          Alert.alert("you need user to login ");
        } else  {
          navigation.navigate('Home');
        }
      })

    // fetch(baseURL + '/Register', {
    //   method: 'POST',
    //   body: {
    //     email,
    //     password,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(resJson => {
    //     console.log('wewe : ', resJson);
    //   });

    // .catch(e => {
    //   console.log('register error', e);
    // });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#332C39'}}>
      <View style={styles.body}>
        <View style={styles.unterBody}>
          <Text style={styles.background}>Register</Text>

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
            <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.loginK}>
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
  },

  textPass: {
    borderWidth: 0.5,
    width: '80%',
    height: '9%',
    borderRadius: 10,
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
