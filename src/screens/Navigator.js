/* eslint-disable */

import React, { useState } from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home.js';
import {LoginScreen} from './Login.js';
//import {Settings} from './Settings.js';

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/*<Stack.Screen name="SettingsScreen" component={SettingsScreen} />*/}
    </Stack.Navigator>
  );
}

