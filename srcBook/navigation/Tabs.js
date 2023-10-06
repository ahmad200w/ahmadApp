import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../constants';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const tabOptions = {
  showLabel: false,
  style: {
      height: "10%",
      backgroundColor: COLORS.black
  }
}
const Tabs = () => {
  return (
    <Tab.Navigator
    tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={[styles.homeImage, {tintColor: tintColor}]}
                />
              );
            case "search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={[styles.homeImage, {tintColor: tintColor}]}
                />
              );
            case "Notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={[styles.homeImage, {tintColor: tintColor}]}
                />
              );
            case "Setting":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={[styles.homeImage, {tintColor: tintColor}]}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  homeImage: {
    width: 25,
    height: 25,
  },
});
