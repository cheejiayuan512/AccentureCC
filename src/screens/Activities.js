/* eslint-disable */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Button, ImageBackground} from 'react-native';
import  SearchBar  from '../SearchBar';
import { ProfileDeck, GameDeck, ActivityDeck } from '../Deck';
import {SignOutButton} from '../LoginComponents';
import { onSignOutButtonPress } from "../../functions/functions";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from '../../assets/Footer.png';

export function Activities({user}) {
  return (
    <View>
      <SearchBar  />
      <ScrollView style={styles.scrollViewVertical}>
        <View>
          <ProfileDeck/>
          <GameDeck/>
          <ActivityDeck/>
          <SignOutButton onPress={() => {
            onSignOutButtonPress().then(() =>
              console.log('Signed out!'),
            );
          }}/>
        </View>
        <View style={{
          flex: 1,
        }}>
          <Image source={Footer} style={{width:'100%',height:110}} resizeMode={'cover'}/>
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
