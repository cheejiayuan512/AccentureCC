import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Button,
} from 'react-native';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      phoneNumber: 'XXXX XXXX',
      confirm: null,
      verifyCode: '',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('phoneNumber')
      .then(value => {
        if (value !== null) {
          // saved input is available
          this.setState({phoneNumber: value}); // Note: update state with last entered value
        }
      })
      .done();
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
    // Save state for use in other steps
    saveState({phoneNumber: this.state.phoneNumber});
    AsyncStorage.setItem('phoneNumber', this.state.phoneNumber); // Note: persist input
    // Go to next step
    next();
  };

  goBack() {
    const {back} = this.props;
    // Go to previous step
    back();
  }

  async verifyPhoneNumber(phoneNumber) {
    const confirmation = await auth().verifyPhoneNumber('+65' + phoneNumber);
    this.setState({confirm: confirmation});
  }
  async confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        this.state.confirm.verificationId,
        this.state.verifyCode,
      );
      let userData = await auth().currentUser.linkWithCredential(credential);
      this.setState({user: userData.user});
    } catch (error) {
      if (error.code === 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error');
        console.log(error.code);
      }
    }
  }
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>Phone Number</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({phoneNumber: text})}
          value={this.state.phoneNumber}
        />
        {this.state.phoneNumber.match(/([89])\d{7}$/) ? (
          <Button
            title="Send Code"
            onPress={() => this.verifyPhoneNumber(this.state.phoneNumber)}
          />
        ) : (
          <Text>Please enter a valid phone number starting with 8 or 9!</Text>
        )}
        {this.state.confirm ? (
          <>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({verifyCode: text})}
            />
            <Button title="Confirm Code" onPress={() => this.confirmCode()} />
          </>
        ) : (
          <></>
        )}
        <View style={styles.btnContainer}>
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

export default step1;
