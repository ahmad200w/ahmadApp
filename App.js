import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';

//import Navigator from './scrWA/Router/Navigator';


import Home from './src/Screens/Home';
import Intro from './src/Screens/Intro';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';


import Navi from './src/router/Navi';
import ProducInfo from './src/Screens/ProducInfo';

import ShoppingsProvider from './src/context/ShoppingsProvider';
import CartScreen from './src/Screens/CartScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Payments from './src/Screens/Payments';



  {/* 
<ShoppingsProvider>
  <Navi /> 
  </ShoppingsProvider>
  */}

const App = () => {
 
  
  return (
    <ShoppingsProvider>
    <Navi /> 
    </ShoppingsProvider>

  )
};
const styles = StyleSheet.create({
 

});

export default App;
