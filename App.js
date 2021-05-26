/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onSignOutButtonPress,
} from './functions/functions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  FBLoginButton,
  GoogleLoginButton,
  SignOutButton,
} from './LoginComponents';

import {createStackNavigator} from '@react-navigation/stack';

import {Home, }

GoogleSignin.configure({
  webClientId:
    '798743753349-pvl2vfnitlettd095c0ajl87v4n8c8su.apps.googleusercontent.com',
  offlineAccess: true,
});
const Section = ({children, title}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.white,
          },
        ]}>
        {title}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.white,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const App: () => Node = () => {
  useEffect(() => {
    // Your code here
    SplashScreen.hide();
  }, []);
  //check if user color scheme is equal to dark mode

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };
  const Stack = createStackNavigator();

  function HomeScreen() {

  }

  function LoginScreen() {

  }

  // function ProfileScreen() {
  //
  // }
  //
  // function SettingsScreen() {
  //
  // }

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/*<Stack.Screen name="Profile" component={ProfileScreen} />*/}
        {/*<Stack.Screen name="Settings" component={SettingsScreen} />*/}
      </Stack.Navigator>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: '#ffffff',
        }}>
        <Section title="Welcome!">
          <Text style={styles.highlight}>Sign in</Text>
        </Section>
        <Separator />
        <MyStack />

        <GoogleLoginButton
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
        <Separator />
        <FBLoginButton
          onPress={() =>
            onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook!'),
            )
          }
        />
        <Separator />
        <SignOutButton
          onPress={() =>
            onSignOutButtonPress().then(() => console.log('User signed out!'))
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    color: 'black',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
