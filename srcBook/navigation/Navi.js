import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {COLORS} from '../constants';
import {Screen} from 'react-native-screens';


import Tabs from './Tabs';
import BookDetail from '../screens/BookDetail';




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Navi = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        {/*Tabs*/}
        <Stack.Screen name="Home" component={Tabs}  />
        <Stack.Screen name='BookDetail' component={BookDetail} options={{ headerShown: false }}/>

      
   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navi;

const styles = StyleSheet.create({});
