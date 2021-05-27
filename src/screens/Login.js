import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FBLoginButton, SignOutButton} from '../LoginComponents';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onSignOutButtonPress,
} from '../../functions/functions';
const Separator = () => <View style={styles.separator} />;
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {LoginButton} from 'react-native-fbsdk';
import {FaceBookSigninButton} from '../../functions/FBSignInButton';
export const LoginScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Text style={styles.highlight}>Welcomsse!</Text>

      <Text style={styles.highlight}>Sign in!</Text>
      <Separator />
      <GoogleSigninButton
        onPress={() => {
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          );
        }}
        style={{width: '50%'}}
      />
      <Separator />
      <FBLoginButton
        onPress={() => {
          onFacebookButtonPress().then(() =>
            console.log('Signed in with Facebook!'),
          );
        }}
        style={{minWidth: '48.2%',padding:10,}}
      />
      <Separator />
    </View>
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
    marginVertical: 0,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
