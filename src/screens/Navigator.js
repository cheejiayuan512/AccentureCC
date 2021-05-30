import React, {useEffect, useMemo, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Home';
import {Login} from './Login.js';
import {Settings} from './Settings.js';
import {AccountCreation} from './AccountCreation.js';
import {Header} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {
  AccountExistCheck,
  useComponentWillMount,
} from '../../functions/functions';
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen';
import {TopBar} from '../TopBar';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      options={{
        headerLeft: () => false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      options={{
        headerLeft: () => false,
      }}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen
        name="AccountCreationScreen"
        component={AccountCreation}
      />
    </Stack.Navigator>
  );
};

export const Navigator = ({user}) => {
  const [accountToken, setAccountToken] = useState(false);

  useEffect(() => {
    // Your code here
    setAccountToken(
      AccountExistCheck(user.email).then(response => {
        return response;
      }),
    );
  }, []);

  return (
    <NavigationContainer>
      {accountToken === true ? (
        <>
          <TopBar user={user} />
          <AppStack/>
        </>
      ) : (
        <>
          <AuthStack/>
        </>
      )}
    </NavigationContainer>
  );
};
