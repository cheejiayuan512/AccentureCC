import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {IconButton, Colors} from 'react-native-paper';

const ImageCard = ({source, style, camera, gallery}) => (
  <Card style={style}>
    <Card.Actions>
      <IconButton
        icon="camera"
        color={Colors.red500}
        size={20}
        onPress={() => {
          camera();
        }}
      />
      <IconButton
        icon="image-multiple"
        color={Colors.red500}
        size={20}
        onPress={() => {
          gallery();
        }}
      />
      <IconButton
        icon="close"
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </Card.Actions>

    <Card.Cover source={{uri: source}} />
  </Card>
);

export default ImageCard;
