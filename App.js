import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import auth from '@react-native-firebase/auth';
import {onSignOutButtonPress} from './functions/functions';
import {SignOutButton} from './src/LoginComponents';

GoogleSignin.configure({
  webClientId:
    '798743753349-pvl2vfnitlettd095c0ajl87v4n8c8su.apps.googleusercontent.com',
  offlineAccess: true,
});

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
        <LoginScreen />
      </SafeAreaView>
    );
  }
  //TODO Jeff this is your navigation part
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Welcome!</Text>
      </View>
      <SignOutButton
        onPress={() =>
          onSignOutButtonPress().then(() => console.log('User signed out!'))
        }
      />
    </SafeAreaView>
  );
};

export default App;
