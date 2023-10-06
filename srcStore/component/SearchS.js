import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'


const SearchS = () => {
  const {width}=useWindowDimensions();
    
  return (
    <View>
     
    <View style={[styles.HangsView,{width:width*0.80}]}>

      <Text style={styles.StartT}>Start with..</Text>
      <Text style={styles.MwP}>mobile width preis</Text>
      <Pressable onPress={()=>console.warn('Explore')}>
        <View style={styles.blackKnopf}>
        <Text style={styles.BbT}>Explore</Text>
        </View>
      </Pressable>
    </View>
    </View>
  )
}

export default SearchS

const styles = StyleSheet.create({
    HangsView:{
        backgroundColor:'#109e78',
        height:150,
        borderRadius:30,
        alignItems:'flex-start'
        ,justifyContent:'center'
        ,flexDirection:'column',
       
        padding:17
        },
        blackKnopf:{
          backgroundColor:'black',
          width:70,
          height:35,
          borderRadius:20,
          alignItems:'center',
          justifyContent:'center',
          marginTop:7
        },BbT:{
          color:'white',
          fontWeight:'bold'
        },MwP:{
          fontSize:16,
          fontWeight:'300'
        },StartT:{
          color:'white',
          fontWeight:'900'
        }
})