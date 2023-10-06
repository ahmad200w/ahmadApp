import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoundIconBtn from '../components/RoundIconBtn';


const Intro = () => {
    
    const [name, setName] = useState('');
    const [password,setPassword]=useState()
    const handleOnChangeText = text => setName(text);
    const handleSubmit = async () => {
        const user = { name: name ,
        
        };
        await AsyncStorage.setItem('user', JSON.stringify(user));
    }
        // trim text without space.... 
  return (
    <View  style={styles.container} >
        <Text style={styles.text}>ادخل اسمك </Text>
        <Text style={styles.text1}> لتدوين ملاحظاتك</Text>
        <TextInput
        alue={name}
        onChangeText={handleOnChangeText}
        placeholder='اسمك'
        style={styles.textInput}></TextInput>
     
       { name.trim().length  >=3? (<RoundIconBtn onpress={handleSubmit}/>):null } 
    
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({
    container:{
flexDirection:'column',
alignItems:'center',
justifyContent:'center'
    },
    text:{
        color:'red',
        fontSize:30,
        fontWeight:'900'
    },  text1:{
        color:'black',
        fontSize:30,
        fontWeight:'900'
    },textInput: {
        borderWidth: 3,
        borderColor: 'red',
        color: 'black',
        width :300,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
      },
})