/* eslint-disable */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
// import Deck from '../src/Deck.js';

function renderDeck (item){
  <View key={item.id} style={styles.cardContainer}>
    <View>
      <Text>Render Card</Text>
      <Icon name="" />
    </View>
  </View>
}

export function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="back to login" onPress={() => navigation.navigate('LoginScreen')}>Back to Login</Button>
    </View>
  );
}


