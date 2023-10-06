import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatsScreen from '../screens/ChatsScreen/ChatsScreen';
import ChatScreen from '../screens/Chatscreen/ChatScreen';
import MainTabNavigator from './MainTabNavigator';
import ContactsScreen from '../screens/ContactsScreen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={MainTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="chats" component={ChatsScreen} />
        <Stack.Screen name="chat" component={ChatScreen} />
        <Stack.Screen name="contact" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
