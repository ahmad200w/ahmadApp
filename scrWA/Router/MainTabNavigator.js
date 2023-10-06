import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import ChatsScreen from '../screens/ChatsScreen/ChatsScreen';
import Nothing from '../screens/Chatscreen/Nothing';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation =useNavigation();
  return (
    <Tab.Navigator initialRouteName="chats">
      <Tab.Screen
        name="status"
        component={Nothing}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/dunkelSt.png')}
              />
            ) : (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/status.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="calls"
        component={Nothing}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/phone-calld.png')}
              />
            ) : (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/phone-call.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="camera"
        component={Nothing}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/videod.png')}
              />
            ) : (
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/icons/video-camera.png')}
              />
            ),
        }}
      />
      <Tab.Screen name="chats" component={ChatsScreen}
       options={{
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/icons/chat.png')}
            />
          ) : (
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/icons/conversation.png')}
            />
          ),
          headerRight:()=>
          
          (   <TouchableOpacity onPress={()=>navigation.navigate('contact')}>
          <Image
          style={{width: 24, height: 24,marginRight:7}}
          source={require('../assets/icons/composeN.png')}
        />
         </TouchableOpacity>
        )
       
      }}
       />
      <Tab.Screen name="settings" component={Nothing}
       options={{
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/icons/settingsd.png')}
            />
          ) : (
            <Image
              style={{width: 24, height: 24 }}
              source={require('../assets/icons/settings.png')}
            />
          ),
      }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
