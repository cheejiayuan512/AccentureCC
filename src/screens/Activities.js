/* eslint-disable */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Button, ImageBackground} from 'react-native';
import  SearchBar  from '../SearchBar';
import { ProfileDeck, GameDeck, ActivityDeck } from '../Deck';
import {SignOutButton} from '../LoginComponents';
import { onSignOutButtonPress } from "../../functions/functions";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from '../../assets/Footer.png';
import { useNavigation } from "@react-navigation/native";

export function Activities({user}) {
  const navigation = useNavigation();
  return (
    <View>
      <SearchBar  />
      <ScrollView style={styles.scrollViewVertical}>
        <View style={{margin:15}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Categories</Text>
          <Button title={'Temp Back to Home Button'} onPress={()=>navigation.navigate('HomeScreen')}/>
          <ActivityDeck/>
          <SignOutButton onPress={() => {
            onSignOutButtonPress().then(() =>
              console.log('Signed out!'),
            );
          }}/>
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
