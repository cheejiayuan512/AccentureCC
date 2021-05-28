import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Text, View} from 'react-native';

export const FBLoginButton = props => {
  return (
    <View>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={props.onPress}
        style={props.style}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'right',
            flex: 1,
            paddingRight: '11%',
          }}>
          Sign In
        </Text>
      </Icon.Button>
    </View>
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
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'right',
          flex: 1,
          paddingRight: '11%',
        }}>
        Sign Out
      </Text>
    </Icon.Button>
  );
};
