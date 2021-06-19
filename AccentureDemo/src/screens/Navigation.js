import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {LandingScreen} from './Landing';
import {CCLandingScreen} from './CCLanding';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {elevation: 0},
        headerShown: false,
        cardStyle: {backgroundColor: '#000000'},
      }}>
      <Tab.Screen name="Home" component={CCLandingScreen} />
        <Tab.Screen name="Scan" component={CCLandingScreen} />
        <Tab.Screen name="Past Orders" component={CCLandingScreen} />
        <Tab.Screen name="Carbon Credits" component={CCLandingScreen} />

      {/*<Stack.Screen name="MapScreen" children={() => <MapScreen />} />*/}
    </Tab.Navigator>
  );
};
export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
