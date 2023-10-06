import {
  AccessibilityInfo,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();



  

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(!authUser){
        setLoading(false);

        
      }
      if(authUser){
        navigation.replace("Home");
       }
    });

    return unsubscribe;
  },[])
  
  const login = () => {
    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
      console.log("user credential",userCredential);
      const user = userCredential.user;
      console.log("user details",user)
    })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",flex:1}}>
          <Text style={{marginRight:10}}>Loading</Text>
          <ActivityIndicator size="large" color={"blue"}/>
        </View>
      ) :( <KeyboardAvoidingView>
        <View style={styles.textView}>
          <Text style={styles.textSI}>Sign In</Text>
          <Text style={styles.textsA}> Sign In to your account</Text>
        </View>
        <View style={styles.textInView}>
          <View style={styles.emailST}>
            <Image
              style={styles.emialImage}
              source={require('../assest/icons/key.png')}
            />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              placeholderTextColor="black"
              style={styles.emailV}
            />
          </View>
          <View style={styles.emailST}>
            <Image
              style={styles.emialImage}
              source={require('../assest/icons/email.png')}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              placeholderTextColor="black"
              style={styles.passV}
              secureTextEntry={true}
            />
          </View>
          <Pressable
            onPress={login}
            style={styles.loginpress}>
            <Text style={styles.textpress}>Login</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('register')}
            style={{marginTop: 20}}>
            <Text style={styles.registerS}>Don't have a account? Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>)}
     
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
   
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textSI: {
    fontSize: 20,
    color: '#662d91',
    fontWeight: 'bold',
  },
  textsA: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: '600',
  },
  textInView: {
    marginTop: 50,
  },
  passV: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 13,
    width: 300,
    marginVertical: 10,
  },

  emailV: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 13,
    width: 300,
    marginVertical: 10,
  },
  emialImage: {
    width: 24,
    height: 24,
  },
  emailST: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textpress: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  loginpress: {
    width: 200,
    backgroundColor: '#318CE7',
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  registerS: {
    textAlign: 'center',
    fontSize: 17,
    color: 'gray',
    fontWeight: '500',
  },
});
