import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';

const Stack = createStackNavigator();

function ProfileImage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Home" />
    </Stack.Navigator>
  );
}
