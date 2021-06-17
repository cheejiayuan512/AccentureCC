import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
export function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.IOMOBtext}>IOMOB</Text>
      <Text style={styles.welcometext}>WELCOME!</Text>
      <Text style={styles.flavourText}>
        Iomob is a mobility super app that aims to help you create the best
        possible version of your next commute. Click on the button below to get
        started!
      </Text>
      <View
        style={{
          borderBottomColor: '#F0EFED',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text>Partners</Text>
      <Text>Logos go here</Text>
      <Button>Get Started</Button>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
  },
  IOMOBtext: {
    color: '#00FFA7',
    textAlign: 'center',
  },
  welcometext: {
    color: '#00FFA7',
  },
  flavourText: {
    color: '#F0EFE7',
  },
};
export default LandingScreen;
