import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchS from '../component/SearchS'
import HandyFlatlist from '../component/HandyFlatlist'

const HomeScreen = () => {
  return (
    <View style={{flexDirection:'column',marginTop:10}}>
     <SearchS/>
     <HandyFlatlist/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})