import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FBLoginButton,
  GoogleLoginButton,
  SignOutButton,
} from '../LoginComponents';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onSignOutButtonPress,
} from '../functions/functions';
const Separator = () => <View style={styles.separator} />;

const LoginScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
      }}>
      <Text style={styles.highlight}>Welcome!</Text>

      <Text style={styles.highlight}>Sign in</Text>
      <Separator />

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
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default LoginScreen;
