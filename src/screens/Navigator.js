/* eslint-disable */

import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {LoginScreen} from './Login.js';
import {SettingsScreen} from './Settings.js';
import { NavigationContainer } from "@react-navigation/native";
import {Header} from "react-native-elements";

const Stack = createStackNavigator();


export function Navigator({user}) {
  return (
    <NavigationContainer>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={{ text: user.displayName, color: 'white' }}
        centerComponent={{ text: user, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        onTouchStart={console.log(user)}
      />
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}
        options={{
          headerLeft: ()=> false
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

