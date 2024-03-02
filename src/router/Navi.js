import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Intro from '../Screens/Intro';
import ProducInfo from '../Screens/ProducInfo';
import CartScreen from '../Screens/CartScreen';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Payments from '../Screens/Payments';


const Navi = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
         <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="info"
          component={ProducInfo}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navi;
