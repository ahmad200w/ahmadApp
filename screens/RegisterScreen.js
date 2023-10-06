import {
    Alert,
    Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Navigation from '../scrs/Navigation';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if(email === "" || password === "" || phone === ""){
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
      console.log("user credential",userCredential);
      const user = userCredential._tokenResponse.email;
      const myUserUid = auth.currentUser.uid;

      setDoc(doc(db,"users",`${myUserUid}`),{
        email:user,
        phone:phone
      })
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
      {/**/}
        {/*TEXT*/}
        <View style={styles.textView}>
          <Text style={styles.textR}>Register</Text>
          <Text style={styles.textcR}>Create a new Account</Text>
        </View>
          {/*email and pass view*/}
        <View style={{marginTop:50}}>

           
            <View style={styles.registerView}>


                <Image style={styles.registerIcon} source={require('../assest/icons/email.png')}/>
                <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="black"
                style={styles.textInreg}
                />
          
            </View>
            <View style={styles.registerView}>
                <Image style={styles.registerIcon} source={require('../assest/icons/key.png')}/>
                <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.textInreg}/>
            </View>
            <View style={styles.registerView}>
         <Image style={styles.registerIcon} source={require('../assest/icons/telephone.png')}/>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone No"
              placeholderTextColor="black"
              style={styles.textInreg}
            />
          </View>
          <Pressable
          onPress={register}
          style={styles.pressS}>
            <Text style={styles.pressTextR}>
              Register
            </Text>


          </Pressable>

          <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
            <Text
              style={styles.sigenIn}
            >
              Already have a account? Sign in
            </Text>
          </Pressable>
         

        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  textR: {
    fontSize: 20,
    color: '#662d91',
    fontWeight: 'bold',
  },
  textcR: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: '600',
  },registerView:{ 
    flexDirection: "row", 
    alignItems: "center" 
},registerIcon:{
    width:24,
    height:24
},textInreg:{
  
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 13,
    width: 300,
    marginVertical: 10,
  },pressS:{
    width: 200,
    backgroundColor: "#318CE7",
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },pressTextR:{ fontSize: 18, textAlign: "center", color: "white" }
  ,sigenIn:{
    textAlign: "center",
    fontSize: 17,
    color: "gray",
    fontWeight: "500",
  }
});
