import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Colors, IconButton, Text} from 'react-native-paper';
import {CardLayer, ProductCard, styles} from '../components/CardLayer';
import DropDownPanel from '../components/DropDownPanel';
import Icon from 'react-native-vector-icons/FontAwesome';
export function CCLandingScreen({navigation}) {
  const [isScrollable, setScroll] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={modalstyles.centeredView}>
          <View style={modalstyles.modalView}>
            <Icon name="rocket" size={30} color="#900" />
            <Text style={modalstyles.modalText}>
              Hello, Conscious Consumer!
            </Text>

            <Pressable
              style={[modalstyles.button, modalstyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={modalstyles.textStyle}>Return</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
        imageStyle={{height:"30%"}}
        source={require('../assets/bg.jpg')}>
        <ScrollView
          contentContainerStyle={
            isScrollable ? styles.noscrollable : styles.scrollable
          }>
          <View style={styles.nav}>
            <IconButton
              icon="account-outline"
              color={Colors.white}
              size={25}
              onPress={() => setModalVisible(true)}
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
            <CardLayer navigation={navigation} />
            <DropDownPanel setScroll={setScroll} title={'What You Need'} />
            <ProductCard navigation={navigation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const modalstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default CCLandingScreen;
