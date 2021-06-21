import type {Node} from 'react';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
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
    height: '100%',
  },
};
export default App;
