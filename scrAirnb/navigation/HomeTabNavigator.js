import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homescren from '../screens/home';
import ExploreNavigator from './ExploreNavigator';

const HomeTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator   tabBarOptions={{
      activeTintColor: 'black',
    }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image style={{width: 25, height: 25}} source={require('../assets/images/search.png')} />
            ) : (
              <Image style={{width: 25, height: 25}} source={require('../assets/images/searchB.png')} />
            ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={Homescren}
        options={{
          tabBarIcon: ({focused}) =>    focused ? (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/heart-3.png')} />
          ) : (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/heartB.png')} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={Homescren}
        options={{
          tabBarIcon: ({focused}) =>    focused ? (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/airbnbB.png')} />
          ) : (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/airbnb.png')} />
          ),
        }}
      />

      <Tab.Screen
        name={'Messages'}
        component={Homescren}
        options={{
          tabBarIcon: ({focused}) =>    focused ? (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/chat.png')} />
          ) : (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/chatB.png')} />
          )}}
      />
      <Tab.Screen
        name={'profile'}
        component={Homescren}
        options={{
          tabBarIcon: ({focused}) =>    focused ? (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/user.png')} />
          ) : (
            <Image style={{width: 25, height: 25}} source={require('../assets/images/userB.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({});
