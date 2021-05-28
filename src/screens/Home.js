import React from "react";
import {View, Text, StyleSheet, Image, Button, ImageBackground} from 'react-native';
import { LandingScreen } from "./Landing";
import { MatchesScreen } from "./Matches";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import { SignOutButton } from "../LoginComponents";
import { onSignOutButtonPress } from "../../functions/functions";
// import Deck from '../src/Deck.js';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function renderDeck (item){
  return(
  <View key={item.id} style={styles.cardContainer}>
    <View>
      <Text>Render Card</Text>
      <Icon name="facebook" />
    </View>
  </View>)
}

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Matches') {
            iconName = focused ? 'heart' : 'heart-o';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rebeccapurple',
        inactiveTintColor: 'gray',
        tabStyle: {backgroundColor:'whitesmoke'},
      }}
    >
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <View>
        <Text>Home tetings</Text>
        <SignOutButton onPress={() => {
          onSignOutButtonPress().then(() =>
            console.log('Signed out!'),
          );
        }}/>
      </View>
    </Tab.Navigator>
  );
}


