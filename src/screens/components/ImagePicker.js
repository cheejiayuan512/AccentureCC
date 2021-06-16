import React, {useState, useCallback} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageCard from './ImagePickerHelper';
import {Colors, IconButton} from 'react-native-paper'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import PlaceholderImage from '../../../assets/img.png';
import RNFS from 'react-native-fs';

const NUM_ITEMS = 3;
const PASSIVE_IMAGE_COLOUR = 'white';
const ACTIVE_IMAGE_COLOUR = 'red';

// this is an item array
const exampleData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  return {
    key: `item-${index}`,
    label: String(index),
  };
});
// defines the item type or maybe declare idk
type Item = {
  key: string,
  label: string,
};

const imagePickerOptions = {
  noData: true,
  selectionLimit: 0,
};
const UploadFile = () => {
  const [imageURI, setImageURI] = useState([]);
  const [data, setData] = useState(exampleData);
  // renders the item
  const renderItem = useCallback(
    ({item, index, drag, isActive}: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            backgroundColor: isActive
              ? ACTIVE_IMAGE_COLOUR
              : PASSIVE_IMAGE_COLOUR,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onLongPress={drag}
          delayLongPress={10}>
          <ImageCard
            style={styles.image}
            key={
              imageURI[item.label] !== undefined
                ? imageURI[item.label].toString()
                : `placeholder-${item.label}`
            }
            source={
              imageURI[item.label] !== undefined
                ? {uri: imageURI[item.label]}
                : PlaceholderImage
            }
            camera={takePicture}
            gallery={uploadFile}
          />
        </TouchableOpacity>
      );
    },
    [imageURI],
  );
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
  const removeItem = () => {
    prevActions =>
      // Filter out the item with the matching index
      prevActions.filter((value, i) => i !== index);
  };
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
      <View
        style={styles.upperScreen}>
        <View style={styles.screen}>
          <View style={{flex: 1}}>
            <DraggableFlatList
              data={data} // the Item Array
              horizontal={true} // horizontal view
              renderItem={renderItem} // the item to render based on the props supplied by the Item Array 'data'
              keyExtractor={(item, index) => `draggable-item-${item.key}`} //extract the key??
              onDragEnd={({data}) => setData(data)} // set the indexes of the item array
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 'auto',
    resizeMode: 'contain',
  },
  screen: {
    marginTop: 24,
    flex: 1,

  },
  upperScreen:{
    maxWidth: '90%',
    maxHeight: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  }
});

export default UploadFile;
