import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './Home';
import {Settings} from './Settings.js';
import {Activities} from './Activities';
import AccountCreation from './AccountCreation.js';
import {NavigationContainer} from '@react-navigation/native';
import {
  AccountExistCheck,
  useComponentWillMount,
  getData,
} from '../../functions/functions';
import {TopBar} from '../TopBar';

const Stack = createStackNavigator();

const AppStack = ({user}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      options={{
        headerLeft: () => false,
      }}>
      <Stack.Screen name="HomeScreen" children={() => <Home user={user} />} />
      <Stack.Screen
        name="SettingsScreen"
        children={() => <Settings user={user} />}
      />
      <Stack.Screen
        name="ActivitiesScreen"
        children={() => <Activities user={user} />}
      />
    </Stack.Navigator>
  );
};

const AuthStack = ({user}) => {
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
          <AppStack user={user} />
        </>
      ) : (
        <>
          <AuthStack user={user} />
        </>
      )}
    </NavigationContainer>
  );
};
