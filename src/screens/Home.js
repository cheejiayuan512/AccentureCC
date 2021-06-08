import React from 'react';
import {LandingScreen} from './Landing';
import {MatchesScreen} from './Matches';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export function Home({user}) {
  const navigation = useNavigation();
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
      }}
      transitionSpec={'open'}
     >
      <Tab.Screen name="Home" children={()=><LandingScreen user={user} navigationMain={navigation}/>} />
      <Tab.Screen name="Matches" children={()=><MatchesScreen user={user} navigationMain={navigation}/>} />
    </Tab.Navigator>
  );
}
