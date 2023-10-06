import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';


const ViewPage = () => {
    const [email,setEmail]=useState("ahmad")
    const [pass,setPass]=useState("")


  const anmils = [
  {
      id: 1,
      name: 'lion',
      age: '12-15 Years',
      lifestyle: 'on erd',
    },
     {
      id: 2,
      name: 'Tiger',
      age: '12-14',
      lifestyle: 'on erd',
      art: 'cat',
    },
    {
      id: 3,
      name: 'Elfent',
      age: '17-19 years',
      lifestyle: 'on erd',
    },
    {
      id: 4,
      name: 'monky',
      age: '17-25 years',
      lifestyle: 'on erd and tree',
    },
]

  const anmilspic = ({item}) => {
    return( <View style={styles.firstView}>
        <Text style={styles.texts}>{item.name}</Text>
    </View>)
  };

  return (
    <View style={styles.contian}>
        <TextInput style={styles.firstView}onChange={(sds)=> setEmail()} >
        
           
    </TextInput>
        <Text style={styles.texts}>
            {email}
        </Text>
        <Text style={styles.texts}>
            {pass}
        </Text>
     {/*<FlatList data={anmils} renderItem={anmilspic}/>*/} 
    </View>
  );
};

export default ViewPage;

const styles = StyleSheet.create({
    contian:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        
        
    },
  firstView: {
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    width:'80%'
    ,height:120
    ,backgroundColor:'redfd',
    margin:15

  },
  texts:{
    fontSize:20,
    color:'black',
    fontWeight:'bold'}
});
