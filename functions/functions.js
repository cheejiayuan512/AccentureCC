import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import LoginFunctions from './LoginFunctions';
import firestore from '@react-native-firebase/firestore';

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
  await firestore()
    .collection('users')
    // Filter results
    .where('email', '==', userEmail)
    .get()
    .then(querySnapshot => {
      /* ... */
      console.log(querySnapshot);
      if (querySnapshot.empty) {
        console.log('no account created yet');
        return false;
      } else {
        console.log('account created already');
        querySnapshot.forEach(doc => {
          console.log(doc);
        });

        return true;
      }
    });
}
export {
  onGoogleButtonPress,
  onFacebookButtonPress,
  onSignOutButtonPress,
  AccountExistCheck,
};
