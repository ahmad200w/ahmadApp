import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RoundIconBtn({onpress,}) {
  return (
    <TouchableOpacity onPress={onpress}>
     <Image style={{width:24,height:24}} source={require('../assest/foto/arrow-right.png')}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})