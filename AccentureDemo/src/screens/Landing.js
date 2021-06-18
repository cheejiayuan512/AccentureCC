import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
export function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.IOMOBtext}>IOMOB</Text>
      <View style={{display: 'flex', justifyContent: 'center', padding: 38}}>
        <Text style={styles.welcometext}>WELCOME!</Text>
        <Text style={styles.flavourText}>
          Iomob is a mobility super app that aims to help you create the best
          possible version of your next commute.
          {'\n'}
          {'\n'}
          Click on the button below to get started!
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#F0EFED',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.welcometext}>Partners</Text>
      <Text>Logos go here</Text>
      <View style={styles.gallery}>
        <Image
          style={styles.image}
          source={require('../assets/LandingLogos/ryde.png')}
        />
        <Image style={styles.image} source={require('../assets/LandingLogos/layer1.png')} />
        <Image style={styles.image} source={require('../assets/LandingLogos/gojek.png')} />
        <Image style={styles.image}
               source={require('../assets/LandingLogos/SBS_Transit_Logo.png')}
        />
        <Image style={styles.image}  source={require('../assets/LandingLogos/smrt.png')} />
        <Image style={styles.image}  source={require('../assets/LandingLogos/sgbike.png')} />
        <Image style={styles.image}  source={require('../assets/LandingLogos/Frame.png')} />
        <Image style={styles.image}  source={require('../assets/LandingLogos/Group.png')} />
      </View>
      <Button>Get Started</Button>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
  },
  gallery: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    height: 20,
    width: 100,
    flex: 1,
  },
  IOMOBtext: {
    flex: 1,
    color: '#00FFA7',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 32,
  },
  welcometext: {
    color: '#00FFA7',
  },
  flavourText: {
    color: '#F0EFE7',
  },
};
export default LandingScreen;
