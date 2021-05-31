import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import LoginFunctions from './LoginFunctions';
import firestore from '@react-native-firebase/firestore';
import {useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function onGoogleButtonPress() {
  // Get the users ID token
  try {
    GoogleSignin.configure({
      webClientId:
        '798743753349-pvl2vfnitlettd095c0ajl87v4n8c8su.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['email', 'profile'],
    });
    const data = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

    // Sign-in the user with the credential
    return LoginFunctions.signInOrLink(
      auth.GoogleAuthProvider.PROVIDER_ID,
      googleCredential,
      data.user.email,
    );

    // return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
}

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  // Sign-in the user with the credential
  return auth()
    .signInWithCredential(facebookCredential)
    .catch(async err => {
      console.log(err.userInfo);
      await onGoogleButtonPress();
      await auth().currentUser.linkWithCredential(facebookCredential);
    });
}

async function onSignOutButtonPress() {
  return auth().signOut();
}

async function AccountExistCheck(userEmail) {
  let response = await firestore()
    .collection('users')
    // Filter results
    .where('email', '==', userEmail)
    .get()
    .then(querySnapshot => {
      /* ... */
      console.log(querySnapshot);
      if (querySnapshot.empty) {
        console.log('No account created yet');
        saveData('accountCheck', 'false');
      } else {
        console.log('Account created already');
        querySnapshot.forEach(doc => {
          console.log(doc);
        });
        saveData('accountCheck', 'true');
      }
    });
}
async function waitCheck(email) {
  const res = await AccountExistCheck(email);
  return res;
}
const useComponentWillMount = func => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  willMount.current = false;
};
export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error when saving data: ' + error.toString());
  }
}
export async function getStringData(key, callback) {
  let data = await AsyncStorage.getItem(key);
  let result = JSON.parse(data);
  callback(result);
}

export async function getData(key, callback) {
  let data = await AsyncStorage.getItem(key);
  console.log(data);
  callback(data);
}
export {
  onGoogleButtonPress,
  onFacebookButtonPress,
  onSignOutButtonPress,
  AccountExistCheck,
  useComponentWillMount,
  waitCheck,
};
