/* eslint-disable */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Button, ImageBackground} from 'react-native';
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
