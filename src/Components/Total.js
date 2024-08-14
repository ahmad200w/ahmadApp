import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Total = ({open,total}) => {
 
  return (<>
    {  open ? (<View style={styles.total}>
        <TouchableOpacity onPress={()=> sendTheOrderWithId()} style={styles.payArrow}>
            <Image style={styles.arrow} source={require('../assets/right-arrow.png')}/>
        </TouchableOpacity>
        <View>
      <Text style={styles.totalText}>Total</Text>
      <Text style={styles.totalText}>{total}$</Text>
      </View>
    
      </View>):(<Text style={styles.fillText}>fill Card Info</Text>)}
      </>
  )
}

export default Total

const styles = StyleSheet.create({
    total:{
        marginTop:250,
        width:300,
        height:100,
        backgroundColor:'black',
        borderRadius:100,
        justifyContent:'center'
        ,flexDirection:'row'
        ,alignItems:'center'
      },
      totalText:{
        color:'white',
        fontSize:20,
        fontWeight:'900',
        left:50,
        
      },
      payArrow:{
        width:50,
        height:50,
        borderRadius:30,
        backgroundColor:'white',
        
        right:60,
        justifyContent:'center',
        alignItems:'center'
      },
      arrow:{
        width:40,
        height:40
      },fillText:{
        fontSize:30,
        fontWeight:'900',
        marginTop:300
      }


})