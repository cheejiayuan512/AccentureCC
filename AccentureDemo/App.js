import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Navigator} from './src/screens/Navigation';

const App: () => Node = () => {
  console.log('---RELOADED REACT NATIVE--- (found in App.js)');
  useEffect(() => {
    // Your code here
    SplashScreen.hide();
  }, []);

  //TODO Jeff this is your navigation part
  return (
    <SafeAreaView style={backgroundStyle.container}>
      <Navigator />
    </SafeAreaView>
  );
};
const backgroundStyle = {
  container: {
    flex: 1,
    backgroundColor: Colors.darker,
  },
};
export default App;
