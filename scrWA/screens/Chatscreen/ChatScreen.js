import {FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Message from '../../components/Message/Message';
import messages from '../../assets/data/messages.json';
import InputBox from '../../components/InputBox/InputBox';
import { useNavigation, useRoute } from '@react-navigation/native';

const ChatScreen = () => {
    const route =useRoute();
    const navigation=useNavigation()
    useEffect(()=>{

        navigation.setOptions({  title: route.params.name })
    },[route.params.name])
   
    
      return (
    <KeyboardAvoidingView behavior={Platform.OS ==='ios'? 'padding':'height'} style={styles.bg}>
    <ImageBackground
      source={require('../../assets/images/BG.png')}
      style={styles.bg}>
        <FlatList data={messages} 
        renderItem={({item})=><Message message={item}/>}
        style={styles.list}
        inverted/>
        <InputBox messages={messages}/>

      </ImageBackground>
      </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },list:{
    padding:10
  }
});
