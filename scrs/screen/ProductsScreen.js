import { StyleSheet, Text, View, FlatList,Image, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductsScreen = ({navigation}) => {
 // const navigation =useNavigation()
  const products =useSelector(state => state.products.products)
  const dispath = useDispatch();
  return (
    <FlatList
    numColumns={2}
    data={products}
    renderItem={({item})=>(
      <Pressable 
      
      
      onPress={()=>{
        dispath(productsSlice.actions.setselectedProduct(item.id))
        navigation.navigate('product Detail')}} style={styles.containerItem}>
      <Image source={{uri: item.image}}
      style={styles.image}>
    
      </Image>
      </Pressable>
    )}/>)
    }
const styles=StyleSheet.create({

  image:{
    width:'100%',
    aspectRatio:1,
  },containerItem:{
    width:'50%',
    padding:1
  }
    
})

export default ProductsScreen

