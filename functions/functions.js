import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import LoginFunctions from './LoginFunctions';

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
      await onGoogleButtonPress();
      await auth().currentUser.linkWithCredential(facebookCredential);
    });
}

async function onSignOutButtonPress() {
  return auth().signOut();
}

export {onGoogleButtonPress, onFacebookButtonPress, onSignOutButtonPress};
