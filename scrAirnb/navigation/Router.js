import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import Homescren from '../screens/home';
import GuestScreen from '../screens/Guest/GuestScreen';
import HomeTabNavigator from './HomeTabNavigator';



const Router = () => {
const Stack = createNativeStackNavigator()
  return (
  

  <NavigationContainer>
   <Stack.Navigator>
   
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
           
          }}
        />

        <Stack.Screen
          name={"Guests"}
          
          component={GuestScreen}
          options={{
            title: "How many people?",
            
            
          }}
        />  

      {/*    <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation"S
          }}
        />  */} 
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
