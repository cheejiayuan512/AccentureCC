import React, {useState} from 'react';
import { Button, Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageCard from "./ImagePickerHelper";
import { Colors, IconButton } from "react-native-paper"; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
const imagePickerOptions = {
  noData: true,
  selectionLimit: 0,
};
const UploadFile = () => {
  const [imageURI, setImageURI] = useState([]);
  const uploadFile = () => {
    launchImageLibrary(imagePickerOptions, response => {
      if (response.didCancel) {
        alert('Post cancelled');
      } else if (response.error) {
        alert('An error occurred: ', response.error);
      } else {
        response.assets.forEach(function (asset) {
          setImageURI(imageURI => [...imageURI, asset.uri]);
          console.log(asset.uri);
          console.log(imageURI);
        });
      }
    });
  };

  const takePicture = () => {
    launchCamera(imagePickerOptions, response => {
      if (response.didCancel) {
        alert('Post canceled');
      } else if (response.error) {
        alert('An error occurred: ', response.error);
      } else {
        response.assets.forEach(function (asset) {
          setImageURI(imageURI => [...imageURI, asset.uri]);
          console.log(asset.uri);
        });
      }
    });
  };
  const removeItem = () =>{
    prevActions => (
      // Filter out the item with the matching index
      prevActions.filter((value, i) => i !== index)
    )
  }
  const listItems = imageURI.map(imageSource => (
    <ImageCard
      style={styles.image}
      key={imageSource.toString()}
      source={imageSource}
      camera={takePicture}
      gallery={uploadFile}
    />
  ));
  return (
    <View>
      <IconButton
        icon="image-multiple"
        color={Colors.red500}
        size={20}
        onPress={uploadFile}
      />
      <IconButton
        icon="camera"
        color={Colors.red500}
        size={20}
        onPress={takePicture}
      />
      <View style={{width: '80%', height: '50%', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-around', alignContent:'space-between'}}>{imageURI !== [] ? listItems : <></>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 'auto',
    resizeMode:'contain',
  }}
);

export default UploadFile;
