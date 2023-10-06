import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {

    const alfa =useco
  return (
    <View>
      <TextInput style={styles.searchB} placeholder='  your Note ...'></TextInput>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchB:{
        borderWidth:1,
        borderColor:'#192418'
        ,width:300,
        height:30,
        borderRadius:30,
        fontSize:13,
        fontWeight:'700',
        color:'#b56b04'
       
    }
})