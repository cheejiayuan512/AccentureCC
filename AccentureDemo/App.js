import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Navigator} from './src/screens/Navigation';
const screenHeight = Dimensions.get('window').height;

const App: () => Node = () => {
  console.log('---RELOADED REACT NATIVE--- (found in App.js)');
  useEffect(() => {
    // Your code here
    SplashScreen.hide();
  }, []);
  //TODO Jeff this is your navigation part
  return (
    <SafeAreaView style={backgroundStyle.container}>
    <ScrollView style={{height:'110%'}}  contentContainerStyle={{flexGrow:1}}>
     <View style={backgroundStyle.container}>
      <Navigator />
     </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const backgroundStyle = {
  container: {
    flex: 1,
    height:'100%',
  },
};
export default App;
