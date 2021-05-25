/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {onFacebookButtonPress, onGoogleButtonPress} from './functions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '798743753349-pvl2vfnitlettd095c0ajl87v4n8c8su.apps.googleusercontent.com',
  offlineAccess: true,
});
import Icon from 'react-native-vector-icons/FontAwesome';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const FBLoginButton = (props) => {
  return <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={props.onPress
    }>
    Login with Facebook
  </Icon.Button>;
}
const GoogleLoginButton = (props) => {
  return <Icon.Button
    name="google"
    onPress={props.onPress
    }>
    Login with Google
  </Icon.Button>;
}

const Separator = () => (
  <View style={styles.separator} />
);

const App: () => Node = () => {
  useEffect(() => {
    // Your code here
    SplashScreen.hide();
  }, []);
  //check if user color scheme is equal to dark mode
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: Colors.lighter,

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <Section title="Welcome!">
            <Text style={styles.highlight}>Sign in</Text>
          </Section>
          <GoogleLoginButton onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'),)} />
          <Separator/>
          <FBLoginButton onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'),)} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
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
