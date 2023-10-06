import {
    Image,
  SafeAreaView,
  SafeAreaViewBase,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.white}>
            <Image style={styles.image} source={require('../assest/foto/login.png')}/>
         </View>

      <View style={styles.gelb}>
   
        <View style={{flexDirection:'row',marginBottom:9}} >
        <Image style={{width:50,height:50,margin:5}} source={require('../assest/foto/email.png')}/>
            <TextInput  placeholder='  Typ your Email' style={styles.user}></TextInput>
       
        </View>
        
        
        <View style={{flexDirection:'row',}} >
        <Image style={{width:50,height:50,margin:5}} source={require('../assest/foto/lock.png')}/>
            <TextInput   style={styles.pass}></TextInput>
        </View>
        
      </View>
    
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gelb: {
    width: '100%',
    height: 500,
    backgroundColor: '#FFC609',
    borderRadius:25,
    marginTop:30   , 
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
       alignItems: 'center',
    justifyContent: 'center',
    

  },image:{
    width:150,
    height:150
  },user:{
    width:200,
    height:60,
    backgroundColor:'#0D66B3',
    borderRadius:20,
    

  },
  pass:{
    width:200,
    height:60,
    backgroundColor:'#0D66B3',
    borderRadius:20,
   
  }
});
