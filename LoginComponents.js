import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export const FBLoginButton = props => {
  return (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={props.onPress}>
      Login with Facebook
    </Icon.Button>
  );
};
export const GoogleLoginButton = props => {
  return (
    <Icon.Button name="google" onPress={props.onPress}>
      Login with Google
    </Icon.Button>
  );
};
export const SignOutButton = props => {
  return (
    <Icon.Button name="sign-out" onPress={props.onPress}>
      Sign Out
    </Icon.Button>
  );
};
