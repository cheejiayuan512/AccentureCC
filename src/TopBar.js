import { Header } from "react-native-elements";
import React from "react";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {Text, View} from 'react-native';

const statusBarHeight = getStatusBarHeight();

function PageName ({user}) {
  return(
    <Text style= {{
      color: "rebeccapurple",
      fontWeight: "bold",
      fontSize: 18 + statusBarHeight / 3,
      marginTop: statusBarHeight / 4,
    }} >{user.displayName}</Text>
  )
}

function UserProfile ({user}) {
  return(
    <Text style= {{
      color: "rebeccapurple",
      fontWeight: "bold",
      fontSize: 18 + statusBarHeight / 4,
      marginTop: statusBarHeight / 4,
    }} >dummy</Text>
  )
}

export function TopBar({user}){
  return(
    <Header
      containerStyle={{
        backgroundColor: 'white',
        justifyContent: 'space-around',
        height: 65+statusBarHeight,
      }}
      placement={'right'}
    >
      <PageName user={ user }/>
      <Text/>
      <UserProfile user={ user }/>
    </Header>
  )
} // note that the margin for text is less than that of
