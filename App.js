/*

 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 
*/

import React, { useState } from 'react';
import { StyleSheet, View,Text, Button, Linking, Image,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const  App =() => {
  const [name ,setName] =useState('MyID')
  const see =3;
  const setData ={
    'name' :'kahlad',
    'name': 'ali'
  }
  

  
  return(
  

    <View style ={styles.body}>
    
      

       <View style={styles.first}>
       <View style={styles.underfirst}>
      

       <Text style={styles.text} >
      
      JobID:43432 {see}
       </Text>
       <TextInput style={styles.ban} placeholder='What is your ID'
       onChangeText={(value)=> setName(value) }/>
          <Image
    style={styles.morba}
    source={require('./ios/fingerprint.png')}
  />
       
       <Text style={styles.text2}>
       {name} </Text> 
      
       
      
       
      

       </View>
       </View>


    
      

    </View>
      
     );
  };
const styles =StyleSheet.create({
  body :{
    flex :1,
  backgroundColor :'white',
  alignItems:'center',
  justifyContent:'center'

  },first:{
    backgroundColor:'#CD5C5C',
    height:'35%',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    
  
  },underfirst:{
    backgroundColor:'#8B0000',
    height:'95%',
    width:'95%',borderRadius:20,
    borderBottomEndRadius:150,
    alignItems:'flex-start',
    justifyContent:'center'
    
    
  },morba:{
    marginLeft:20,
    marginBottom:80,
    
    height:'20%',
    width:'20%',
    
   
  
    alignItems:'center',
    justifyContent:'center',
    },ban:{
      color:'black',
    fontSize:20,
    marginLeft:160,
    marginBottom:-40,
    },text:{
      color:'#CD5C5C',
    fontSize:20,
    marginLeft:160,
    marginBottom:-50,
  },text2:{
   
      fontfamily: 'Open Sans',
      
    color:'#1C2833',
fontSize:40,
marginLeft:140,
marginTop:-30
,
  },

  
  
  },
  
)
export default App;
