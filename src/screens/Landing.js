/* eslint-disable */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Button, ImageBackground} from 'react-native';
import { ProfileDeck, GameDeck, ActivityDeck } from '../Deck';
import {SignOutButton} from '../LoginComponents';
import { onSignOutButtonPress } from "../../functions/functions";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from '../../assets/Footer.png';

function renderDeck (item){
  return(
    <View key={item.id} style={styles.cardContainer}>
      <View>
        <Text>Render Card</Text>
        <Icon name="facebook" />
      </View>
    </View>)
}

export function LandingScreen({navigation}) {
  return (
    <View>
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
          <Image source={Footer} style={{width:'100%'}} resizeMode={'cover'}/>
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
