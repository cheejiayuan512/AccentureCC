import React, {useState} from 'react';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../components/CardLayer';

import DropDownPanel from '../components/DropDownPanel';
export function CCHistoryScreen({navigation}) {
  const [isScrollable, setScroll] = useState(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        source={require('../assets/landingBG.png')}>
        <ScrollView
          contentContainerStyle={
            isScrollable ? styles.noscrollable : styles.scrollable
          }>
          <Text style={styles.IOMOBtext}>Your Past Orders!</Text>
          <View style={styles.image}>
            <DropDownPanel
              setScroll={setScroll}
              title={'Yesterday'}
              subtitle={'13 CO2 Savings'}
            />
            <DropDownPanel
              setScroll={setScroll}
              title={'5 days ago'}
              subtitle={'8 CO2 Savings'}
            />
            <DropDownPanel
              setScroll={setScroll}
              title={'9 days ago'}
              subtitle={'4 CO2 Savings'}
            />
            <DropDownPanel
              setScroll={setScroll}
              title={'11 days ago'}
              subtitle={'2 CO2 Savings'}
            />
            <DropDownPanel
              setScroll={setScroll}
              title={'17 days ago'}
              subtitle={'-3 CO2 Savings'}
            />
            <DropDownPanel
              setScroll={setScroll}
              title={'3 weeks ago'}
              subtitle={'-7 CO2 Savings'}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CCHistoryScreen;
