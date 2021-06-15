import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton, Text, TextInput} from 'react-native-paper';
import UploadFile from '../ImagePicker';
import ImageCard from "../ImagePickerHelper";

export class step7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
    };
  }
  static getDerivedStateFromProps = props => {
    const {getTotalSteps, getCurrentStep} = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };
  nextStep = () => {
    const {next, saveState} = this.props;
    next();
  };
  prevStep = () => {
    const {back} = this.props;
    // Go to previous step
    back();
  };
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>Choose your pictures!</Text>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        {/*this is the important part*/}
        <UploadFile />
        {/*<View style={{width: '80%', height: '50%', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-around', alignContent:'space-between'}}>*/}
        {/*  <ImageCard style={{width: '40%', height: '30%'}} />*/}
        {/*  <ImageCard style={{width: '40%', height: '30%'}} />*/}
        {/*  <ImageCard style={{width: '40%', height: '30%'}} />*/}
        {/*  <ImageCard style={{width: '40%', height: '30%'}} />*/}


        {/*</View>*/}
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.prevStep} style={styles.btnStyle}>
            <Image
              source={require('../../../../assets/img.png')}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
            <Image
              source={require('../../../../assets/img.png')}
              style={styles.btnImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step7;
