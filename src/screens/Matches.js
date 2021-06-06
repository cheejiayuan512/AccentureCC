
import React from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SignOutButton} from '../LoginComponents';
import {Avatar} from "react-native-elements/dist/avatar/Avatar";

function getMatches({user}){
  return (
    <Text>getMatches</Text>
  )
}

function ListOfChats({user}){ // here i just repeated the user 10 times. in future change to repeat partner chats
  var indents = [];
  for (var i = 0; i < 10; i++) {
    if (i%2===0){
      indents.push(<Chats user={user} altColour={true}/>);
    } else {
      indents.push(<Chats user={user} altColour={false}/>);
    }

  }
  return indents;
}

function Chats({user, altColour}){
  let colour = 'whitesmoke';
  if (altColour) {
    colour = 'white'
  }
  return (
    <View style={{backgroundColor:colour}}>
      <View style={{marginVertical:7, marginHorizontal:10, flexDirection:'row'}}>
        <View style={{marginLeft:5, marginRight:25, marginVertical:5}}>
          <Avatar rounded
                  source={{ uri: user.photoURL, }} // temporarily, this is set to the Google photo
                  activeOpacity={1}
                  size={50}
                  onPress={()=>console.log(user.photoURL)}/>
        </View>
        <TouchableOpacity style={{justifyContent: "center"}} onPress={()=>console.log("Something")} activeOpacity={1} >
          <Text style={{fontSize:24}}>{user.displayName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export function MatchesScreen({user, navigationMain}) {
  return (
    <View >
      <View style={{backgroundColor:'rebeccapurple'}}>
        <Text style={{fontSize:25, fontWeight:'bold', margin:15, color:'white'}}>Your Matches</Text>
      </View>
      <ScrollView style={{backgroundColor:'white'}}>
        <ListOfChats user={user}/>
      </ScrollView>
    </View>
  );
}
