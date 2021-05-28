/* eslint-disable */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Button, ImageBackground} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import { ProfileDeck, GameDeck, ActivityDeck } from '../Deck';
import {SignOutButton} from '../LoginComponents';


export function LandingScreen({navigation}) {
  return (
    <View>
      <ScrollView style={styles.scrollViewVertical}>
        <View>
          <ProfileDeck/>
          <GameDeck/>
          <ActivityDeck/>
          <SignOutButton onPress={() => navigation.navigate('LoginScreen')}/>
        <Text>hihihihih</Text>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  scrollViewVertical: {
    backgroundColor: 'whitesmoke',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});
