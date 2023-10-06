import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Homescren from '../screens/home'
import SearchResultsScreen from '../screens/searchResults'
import SearchResultsTabNavigator from './SearchResultsTabNavigator'

const ExploreNavigator = (props) => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen
        name={ 'Welcome'}
        component={Homescren}
        options={{
        headerShown: false,}}
        />
        <Stack.Screen
        name={ 'SearchResults'} 
        component={SearchResultsTabNavigator}
        options={{
           
        title:
        'Search your destination',}}
        />
 </Stack.Navigator>
  

  )
}



const styles = StyleSheet.create({})
export default ExploreNavigator