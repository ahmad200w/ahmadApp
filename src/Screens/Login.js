import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { apiLogin } from '../../api'

const Login = () => {
    const navigation=useNavigation()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const goToRegister =()=>{
        navigation.navigate('register')
    }
    const goToIntro=()=>{

        navigation.navigate('intro')
    }


    const login =  () => {
        apiLogin(email,password)
        .then(res => {
            if(res){
                console.log(password,email)
                navigation.navigate('intro')
                return "sucess"
              
            }else{
                return 'no data '
            }
        }).catch(err=>{
            return err
        })
    }

  return (

    <SafeAreaView style={{backgroundColor:'#332C39'}}>
    <View style={styles.body}>
       
        <View style={styles.unterBody}>
        <Text style={styles.Welcome}> HandyStore</Text>
            <Text style={styles.text}>Email</Text>
        <TextInput  value={email} style={styles.textEmail}
        onChangeText={(text)=>setEmail(text)}
        placeholder='Enter Email' />
        <Text style={styles.text}>Pass</Text>
        <TextInput  value={password} style={styles.textPass}
        onChangeText={(text)=>setPassword(text)}
         placeholder='Enter Pass'/>
          <View style={styles.knopfBody}>
    <TouchableOpacity onPress={goToIntro} style={styles.registerK}>
        <Text style={styles.textTK}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={async ()=> await login()} style={styles.loginK}>
    <Text style={styles.textTK}>Login</Text>
    </TouchableOpacity>
    </View>
      
    </View>
   
        </View>
        </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    body:{
        alignItems:'center',
        justifyContent:'center'
        ,width:'100%',
        height:'100%'
        ,backgroundColor:'#332C39'
    },unterBody:{
        backgroundColor:'#609EA2',
        width:"90%",
        height:"80%",
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'

     
    },Welcome:{
        marginBottom:80,
        right:3,
        fontWeight:'900',
        fontSize:48,
        color:'#332C39'
    },
    textEmail:{
      
       borderWidth:0.5,
       width:"80%",
       height:"9%",
       borderRadius:10,
       margin:7,
       
    },

    textPass:{
        borderWidth:0.5,
        width:"80%",
        height:"9%",
        borderRadius:10
    },text:{
        right:120,
        fontSize:15,
        fontWeight:'900'
    },knopfBody:{
        flexDirection:'row',
        margin:20
    },registerK:{
        width:120,
        height:50,
        backgroundColor:'#332C39',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
    },loginK:{
        width:120,
        height:50,
        backgroundColor:'#332C39',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },textTK:{
        color:'#609EA2',
        fontSize:16,
        fontWeight:'600'
    }
})