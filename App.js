import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './src/screens/Login';
import auth from '@react-native-firebase/auth';
import {Navigator} from './src/screens/Navigator';
import {AccountExistCheck} from './functions/functions';

const App: () => Node = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    // Your code here
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    SplashScreen.hide();
    return subscriber; // unsubscribe on unmount
  }, []);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <Login />
      </SafeAreaView>
    );
  }
  //TODO Jeff this is your navigation part
  return (
    <SafeAreaView style={backgroundStyle}>
      <Navigator
        user={user}
        email={user.email}
      />
    </SafeAreaView>
  );
};

export default App;
