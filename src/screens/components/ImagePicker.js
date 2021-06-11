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

const NUM_ITEMS = 5;

function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}
// this is an item array
const exampleData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${backgroundColor}`,
    label: String(index),
    backgroundColor,
  };
});
// defines the item type
type Item = {
  key: string,
  label: string,
  backgroundColor: string,
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
            backgroundColor: isActive ? 'red' : item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onLongPress={drag}
          delayLongPress={10}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 32,
            }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    [],
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
      <View
        style={{
          width: '80%',
          height: '60%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'space-between',
          borderRadius: 10,
          padding: 10,
          backgroundColor: '#ffffff',
        }}>
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
        {imageURI !== [] ? listItems : <></>}
        <DraggableFlatList
          data={data} // the Item Array
          horizontal={true} // horizontal view
          renderItem={renderItem} // the item to render based on the props supplied by the Item Array 'data'
          keyExtractor={(item, index) => `draggable-item-${item.key}`} //extract the key??
          onDragEnd={({data}) => setData(data)} // set the indexes of the item array
        />
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
});

export default UploadFile;
