import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


const InputBox = ({messages}) => {

    console.log(messages)
    const [newMessage,setNewMessage]=useState('Hello')
    const onSend=()=>{
        console.warn('keine Nachrichten',newMessage)
           setNewMessage('')
        
    }
  return (
    <SafeAreaView style={styles.Container}>
        <Image  style={styles.icon}source={require('../../assets/images/plus-button.png')}/>
        <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='Typ your Message...'/>
        <Pressable onPress={onSend}>
        <Image  style={styles.send} source={require('../../assets/images/send.png')}/>
        </Pressable>
    </SafeAreaView>
  )
}

export default InputBox

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'whitesmoke',
        flexDirection:'row'
        ,padding:5,
        paddingHorizontal:10,
        alignItems:'center'
        
        }, input: {
            flex: 1,
            backgroundColor: "white",
            padding: 5,
            paddingHorizontal: 10,
            marginHorizontal: 10,
        
            borderRadius: 50,
            borderColor: "lightgray",
            borderWidth: StyleSheet.hairlineWidth,
          },
    icon:{
        width:24,
        height:24
    },
    send:{
        width:23.5,
        height:23.5,
        backgroundColor: "whitesmoke",
        padding: 7,
        borderRadius: 24,
        overflow: "hidden",
    }
})
