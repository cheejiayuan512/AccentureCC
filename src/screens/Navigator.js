/* eslint-disable */

import React, { useState } from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {LoginScreen} from './Login.js';
import {SettingsScreen} from './Settings.js';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

