import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../components/CardLayer';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
export function CCScanScreen({navigation}) {
  const onSuccess = e => {
    navigation.navigate(e.data);
  };
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
        <Text style={styles.IOMOBtext}>Scan Your Product!</Text>
        <QRCodeScanner
          containerStyle={{flex: 4}}
          fadeIn={true}
          reactivate={true}
          reactivateTimeout={15}
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
        />
      </ImageBackground>
    </View>
  );
}

export default CCScanScreen;
