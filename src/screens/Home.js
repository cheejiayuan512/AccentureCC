/* eslint-disable */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import { SignOutButton } from "../LoginComponents";
import { onSignOutButtonPress } from "../../functions/functions";
// import Deck from '../src/Deck.js';

function renderDeck (item){
  return(
  <View key={item.id} style={styles.cardContainer}>
    <View>
      <Text>Render Card</Text>
      <Icon name="facebook" />
    </View>
  </View>)
}

export function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home tetings</Text>
      <SignOutButton onPress={() => {
        onSignOutButtonPress().then(() =>
          console.log('Signed out!'),
        );
      }}/>
    </View>
  );
}


