import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {CCLandingScreen} from './CCLanding';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CCScanScreen from './CCScan';
import CCHistoryScreen from './CCHistory';
import CCDonationScreen from './CCDonation';
import CCProductScreen from './productscreens/CCProduct';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
      })}>
      <Stack.Screen name="HomeScreen" component={CCHomeScreen} />
      <Stack.Screen name="ProductScreen" component={CCProductScreen} />
    </Stack.Navigator>
  );
};

const CCHomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      lazy={false}
      screenOptions={({route}) => ({
        headerStyle: {elevation: 0},
        headerShown: false,
        cardStyle: {backgroundColor: '#000000'},
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={CCLandingScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#4718ca',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={'white'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={CCScanScreen}
        options={{
          tabBarLabel: 'Scan Product',
          tabBarColor: '#453ada',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={'white'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={CCHistoryScreen}
        options={{
          tabBarLabel: 'Past Orders',
          tabBarColor: '#2e56e6',
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="drawer" color={'white'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="DonationScreen"
        component={CCDonationScreen}
        options={{
          tabBarLabel: 'Carbon Credits',
          tabBarColor: '#1475f4',
          tabBarIcon: ({color}) => (
            <Ionicons name="receipt-outline" color={'white'} size={24} />
          ),
        }}
      />

      {/*<Stack.Screen name="MapScreen" children={() => <MapScreen />} />*/}
    </Tab.Navigator>
  );
};
export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
