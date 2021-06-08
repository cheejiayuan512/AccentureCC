import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Home';
import {Settings} from './Settings.js';
import AccountCreation from './AccountCreation.js';
import {NavigationContainer} from '@react-navigation/native';
import {
  AccountExistCheck,
  useComponentWillMount,
  getData,
} from '../../functions/functions';
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
      <Stack.Screen name="AccountCreationScreen" component={AccountCreation} />
    </Stack.Navigator>
  );
};

export const Navigator = ({user}) => {
  let [accountToken, setAccountToken] = useState('false');
  useComponentWillMount(() => {
    AccountExistCheck(user.email).then(() =>
      getData('accountCheck', function (result) {
        setAccountToken(result);
      }),
    );
  }, [user.email]);

  return (
    <NavigationContainer>
      {accountToken === 'true' ? (
        <>
          <TopBar user={user} />
          <AppStack />
        </>
      ) : (
        <>
          <AuthStack />
        </>
      )}
    </NavigationContainer>
  );
};
