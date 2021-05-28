import {Button, Text, View} from 'react-native';
import React from 'react';
import { onGoogleButtonPress, onSignOutButtonPress } from "../../functions/functions";

export function AccountCreationScreen({navigation}) {
  return (
    <View>
      <Text>This is the Account Creation Screen</Text>
      <Button
        title="back to login"
        onPress={() => {
          onSignOutButtonPress().then(() =>
            console.log('Signed out!'),
          );
        }}>
        Back to Login
      </Button>
    </View>
  );
}
