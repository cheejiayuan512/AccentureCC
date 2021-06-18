import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import { Card, Colors, IconButton, Text } from "react-native-paper";
import {CardLayer, styles} from '../components/CardLayer';
import Panel from "../components/DropDownPanel";
import CollapseView from "../components/DropDownPanel";
export function CCLandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'cover', // Not sure if this helps, but it was used in the docs, listed below
          justifyContent: 'center',
        }}
        source={require('../assets/landingBG.png')}>
        <View style={styles.nav}>
          <IconButton
            icon="account-outline"
            color={Colors.white}
            size={25}
            onPress={() => console.log('Pressed')}
          />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              backgroundColor: 'black',
              borderRadius: 50,
            }}>
            <IconButton
              icon="cart-outline"
              color={Colors.white}
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.IOMOBtext}>Welcome Back!</Text>
        <View style={styles.image}>
          <CardLayer />
          <CollapseView/>
        </View>
      </ImageBackground>
    </View>
  );
}
export default CCLandingScreen;
