import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SearchResult from '../../components/SearchResult';
import Homescren from '../screens/home';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();


const SearchResultsTabNavigator = (props) => {
 

  return (
    <>
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'black',
      indicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"map"} component={SearchResult}/>
      <Tab.Screen name={"list"} component={SearchResult}/>
     </Tab.Navigator>
    </>
  );
};

export default SearchResultsTabNavigator;

const styles = StyleSheet.create({});
