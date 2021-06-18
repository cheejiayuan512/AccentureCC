import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {LandingScreen} from './Landing';
import {CCLandingScreen } from './CCLanding'
const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#000000' }
    }}>
      <Stack.Screen name="LandingScreen" component={CCLandingScreen} />
      {/*<Stack.Screen name="MapScreen" children={() => <MapScreen />} />*/}
    </Stack.Navigator>
  );
};
export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
