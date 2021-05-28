/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Home';
import {Login} from './Login.js';
import {Settings} from './Settings.js';
import {AccountCreation} from './AccountCreation.js';
import {Header} from "react-native-elements";
import {NavigationContainer} from '@react-navigation/native';
import {AccountExistCheck} from "../../functions/functions";
import {TopBar} from '../TopBar';

const Stack = createStackNavigator();

let userToken = AccountExistCheck('scorpionchip123@gmail.com')

export function Navigator({user}) {
  return (
    <NavigationContainer>
      <TopBar user={user}/>
      <Stack.Navigator
        initialRouteName={ userToken ?"HomeScreen":'AccountCreationScreen'}
        screenOptions={{headerShown: false}}
        options={{
          headerLeft: ()=> false
        }}
      >
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="SettingsScreen" component={Settings} />
        <Stack.Screen name='AccountCreationScreen' component={AccountCreation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

