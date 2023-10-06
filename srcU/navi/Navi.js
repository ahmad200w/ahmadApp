import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/Login';
import HomeScrren from '../../screens/HomeScrren';

import PickUpScreen from '../../screens/PickUpScreen';
import CartScreen from '../../screens/CartScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Navi = () => {
  return (
  
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={HomeScrren} options={{headerShown:false}}/>
            <Stack.Screen name='register' component={RegisterScreen} options={{headerShown:false}}/>
            <Stack.Screen name='PickUp' component={PickUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name='cartScreen' component={CartScreen} options={{headerShown:false}}/>
            
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navi

const styles = StyleSheet.create({})