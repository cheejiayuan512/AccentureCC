import React, {Component} from 'react';
import {Image, View, TouchableOpacity, TextInput, Text} from 'react-native';

import styles from './styles';

export class PhoneCodeStep extends Component {
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
    saveState({phoneCode: this.state.phoneCode});
    next();
  };

  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>Verify Phone Code</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
      <Text style={styles.currentStepText}>Please wait for the verification SMS</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({phoneCode: text})}
          value={this.state.phoneCode}
          placeholder={'Phone Code'}
          placeholderTextColor="#fff"
        />
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
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

export default PhoneCodeStep;
