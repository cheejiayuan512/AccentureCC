import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {FBLoginButton} from '../LoginComponents';
import {onFacebookButtonPress,onGoogleButtonPress,} from '../../functions/functions';
import Background from '../../assets/login.png';
const Separator = () => <View style={styles.separator} />;
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
export const Login = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
      }}>
      <ImageBackground source={Background} style={styles.backgroundImage}>
        <Text style={styles.activeUsers}>X users online</Text>
        <Text style={styles.highlight}>Welcome!</Text>

        <Text style={styles.greyHighlight}>SIGN IN</Text>
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
          style={{minWidth: '48.2%', padding: 10}}
        />
        <Separator />
        <Text style={styles.problemHighlight}>Problems signing in?</Text>
        <Text style={styles.infoHighlight}>
          By signing in and using the app, you agree to our{' '}
          <Text style={{textDecorationLine: 'underline'}}>Terms</Text>,{' '}
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>{' '}
          and{' '}
          <Text style={{textDecorationLine: 'underline'}}>Cookies Policy</Text>.
          Click to learn more.
        </Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  activeUsers: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FF00D6',
    marginTop: '40%',
    marginBottom: '5%',
  },
  highlight: {
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: '700',
    color: 'black',
    marginBottom: '5%',
  },

  greyHighlight: {
    fontWeight: '700',
    color: '#656565',
    marginBottom: '5%',
  },
  problemHighlight: {
    color: '#949494',
    marginTop: '15%',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  infoHighlight: {
    color: '#949494',
    marginTop: '15%',
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
  separator: {
    margin: '2%',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
