import { Image, Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const Search = ({searchFilter}) => {
    const {width,height}=useWindowDimensions()
    const [searchItem,setSearchItem]=useState('')

    const onHandel=()=>{

      console.warn("hi")
    }
  return (
    <View style={styles.container}>
      <View>
      
        </View>
        <Pressable onPress={()=>searchFilter(searchItem)}>
        <Image style={styles.searchIcon} source={require('../assets/icons/searchIcon.png')}></Image>
        </Pressable>
        <View style={styles.inputSearch}>
        <TextInput placeholder='search' onChangeText={text =>setSearchItem(text)}/>


        </View>
        


   
    
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:'90%'
        ,height:60,
        borderRadius:15
    },searchIcon:{
      width:30,
      height:30,
      marginRight:10
    },inputSearch:{
     borderRadius:15,
      borderWidth:2,
      width:300,
      height:50,
      justifyContent:'center',
      padding:5
    }


})