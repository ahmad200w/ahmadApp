import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screen/ProductsScreen'
import ProductDetailsScreen from './screen/ProductDetailsScreen'
import ShoppingCart from './screen/ShoppingCart'
import { useSelector } from 'react-redux'
import { selectNumberOfItems } from './store/cartSlice'

const Navigation = () => {
    const numberOfItems =useSelector(selectNumberOfItems)
    const stack =createNativeStackNavigator();
   const headerRightCart =({navigation})=>({headerRight:()=>(
    <Pressable onPress={()=>navigation.navigate('Cart')} style={{flexDirection:'row'}} >
        <Image style={styles.cartImage} source={require('../scrs/assest/foto/shopping-cart.png')}></Image>
        <Text style={styles.textS}>{numberOfItems}</Text>
    </Pressable>
)})
  return (
  <NavigationContainer>
    <stack.Navigator>
        <stack.Screen  name='products' component={ProductsScreen}
        options={headerRightCart}/>
        <stack.Screen  name='product Detail' component={ProductDetailsScreen}
        options={{presentation:'modal'}}/>
        <stack.Screen  name='Cart' component={ShoppingCart}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({
    cartImage:{
        width:20,height:20
    },textS:{
        marginTop:2.5,
        marginLeft:10,
        fontWeight:'500'
    }
})