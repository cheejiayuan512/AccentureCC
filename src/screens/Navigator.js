/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {LoginScreen} from './Login.js';
import {SettingsScreen} from './Settings.js';
import {AccountCreationScreen} from './AccountCreationScreen.js';
import {Header} from "react-native-elements";
import {NavigationContainer} from '@react-navigation/native';
import {AccountExistCheck} from "../../functions/functions";
//import {Settings} from './Settings.js';

const Stack = createStackNavigator();

let userToken = AccountExistCheck('scorpionchip123@gmail.com')


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
        initialRouteName={ userToken ?"HomeScreen":'AccountCreationScreen'}
        screenOptions={{headerShown: false}}
        options={{
          headerLeft: ()=> false
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name='AccountCreationScreen' component={AccountCreationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

