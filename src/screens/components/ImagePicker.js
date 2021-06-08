import React, {useState} from 'react';
import {Button, Image, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
const imagePickerOptions = {
  noData: true,
  selectionLimit: 0,
};
const UploadFile = () => {
  const [imageURI, setImageURI] = useState([]);
  const uploadFile = () => {
    launchImageLibrary(imagePickerOptions, response => {
      if (response.didCancel) {
        alert('Post canceled');
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
  const listItems = imageURI.map(imageSource => (
    <Image
      style={styles.image}
      key={imageSource.toString()}
      source={{uri: imageSource}}
    />
  ));
  return (
    <SafeAreaView>
      <Button
        title="Upload Pictures using Gallery"
        onPress={uploadFile}
        color="green"
      />
      <Button
        title="Take Picture with Camera"
        onPress={takePicture}
        color="green"
      />
      <>{imageURI !== [] ? listItems : <></>}</>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 'auto',
    padding: 10
  }}
);

export default UploadFile;
