/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home.js';
import {LoginScreen} from './Login.js';
import {NavigationContainer} from '@react-navigation/native';
//import {Settings} from './Settings.js';

const Stack = createStackNavigator();
// const screenOptionStyle = {
//   headerShown: false,
// };

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/*<Stack.Screen name="Settings" component={Settings} />*/}
    </Stack.Navigator>
  );
}

