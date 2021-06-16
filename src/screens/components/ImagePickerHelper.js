import * as React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {IconButton, Colors} from 'react-native-paper';
import {ImageBackground, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function removeItemValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};

const ImageCard = ({source, style, camera, gallery}) => (
  <ImageBackground
    source={source}
    style={styles.imageBackground}
    imageStyle={styles.image}>
    <IconButton
      icon="close"
      color={Colors.red500}
      size={20}
      onPress={() => getAllKeys()} // TODO Make actual delete button
      style={styles.button}
    />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imageBackground: {
    // backgroundColor: 'white',
    padding: 20,
    // marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 5,
    height: 80,
    width: 80,
  },
  button: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    left: 30,
  },
});

export default ImageCard;
