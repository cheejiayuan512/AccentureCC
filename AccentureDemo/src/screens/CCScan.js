import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, IconButton, Text} from 'react-native-paper';
import {CardLayer, ProductCard, styles} from '../components/CardLayer';

import DropDownPanel from '../components/DropDownPanel';
export function CCLandingScreen({navigation}) {
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
          <View style={styles.nav}>
            <IconButton
              icon="account-outline"
              color={Colors.white}
              size={25}
              onPress={() => console.log('Pressed')}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                backgroundColor: 'black',
                borderRadius: 50,
              }}>
              <IconButton
                icon="cart-outline"
                color={Colors.white}
                size={25}
                onPress={() => console.log('Pressed')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.IOMOBtext}>Welcome Back!</Text>
          <View style={styles.image}>
            <CardLayer />
            <DropDownPanel setScroll={setScroll} />
            <ProductCard />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CCLandingScreen;
