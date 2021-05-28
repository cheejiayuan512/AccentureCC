/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home.js';
import {LoginScreen} from './LoginScreen.js';
import {AccountCreationScreen} from './AccountCreationScreen.js';

import {NavigationContainer} from '@react-navigation/native';
import { AccountExistCheck } from "../../functions/functions";
//import {Settings} from './Settings.js';

const Stack = createStackNavigator();
// const screenOptionStyle = {
//   headerShown: false,
// };
let userToken = AccountExistCheck('scorpionchip123@gmail.com')

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName={ userToken ?"HomeScreen":'AccountCreationScreen'} >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name='AccountCreationScreen' component={AccountCreationScreen}/>
      {/*<Stack.Screen name="Settings" component={Settings} />*/}
    </Stack.Navigator>
  );
}

