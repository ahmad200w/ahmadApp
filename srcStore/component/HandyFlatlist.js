import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HandyFlatlist = () => {
  return (
    <View style={styles.boxView}>
        <View></View>
      <Text style={{}}>HandyFlatlist</Text>
    </View>
  )
}

export default HandyFlatlist

const styles = StyleSheet.create({
    boxView:{
        backgroundColor:'#e37e27',
        width:200,
        height:250,
        marginTop:12,
        borderRadius:30,
        alignItems:'center'
    }
})