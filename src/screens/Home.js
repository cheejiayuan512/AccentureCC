import React from 'react';
import {LandingScreen} from './Landing';
import {MatchesScreen} from './Matches';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        tabStyle: {backgroundColor: 'whitesmoke'},
      }}>
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
    </Tab.Navigator>
  );
}
