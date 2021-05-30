import { Header } from "react-native-elements";
import React, { useState } from "react";
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar,Overlay } from 'react-native-elements';

const barHeight = 60

function PageName ({user}) {
  return(
      <View style={{
        height: barHeight,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1,}}>
        <Text style= {{
          color: "rebeccapurple",
          fontWeight: "bold",
          fontSize: 22,
          marginLeft:7,
        }} >{user.displayName}</Text>
      </View>
  )
}

function UserProfile ({user, onPress1, onPress2}) {
  return(
    <View style={{flexDirection:'row'}}>
      <Avatar
        rounded
        source={{ uri: 'https://cdn.vox-cdn.com/thumbor/ByCzLV-FK04btA7bxc_pr5Pory4=/0x0:560x345/1200x800/filters:focal(236x129:324x217)/cdn.vox-cdn.com/uploads/chorus_image/image/69137452/Dogecoin_logo.0.png', }}
        activeOpacity={1}
        onPress={()=>onPress1()}
      />
      <Avatar
        containerStyle={{marginLeft: 15, marginRight: 7}}
        rounded
        source={{ uri: 'https://images.fineartamerica.com/images-medium-large-5/the-curious-otter-martyn-green.jpg', }}
        activeOpacity={1}
        onPress={()=>console.log('did i press')}
      />
    </View>
  )
}

export function TopBar({user}){
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return(
    <SafeAreaView>
      <Header
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
          height: barHeight,
        }}
        placement={'right'}
      >
        <PageName user={ user }/>
        <Text/>
        <UserProfile user={ user } onPress1={()=>console.log('clicked dogecoin')}/>
      </Header>
      <Overlay isVisible={visible} onBackdropPress={()=>toggleOverlay()}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </SafeAreaView>
  )
}
