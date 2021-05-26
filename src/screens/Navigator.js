import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Home.js';
//import {Login} from './Login.js';
//import {Settings} from './Settings.js';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default Navigator;
