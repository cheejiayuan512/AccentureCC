import React, {Component} from 'react';
import {Image, View, TouchableOpacity, TextInput, Text} from 'react-native';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      name: '',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('name')
      .then(value => {
        if (value !== null) {
          // saved input is available
          this.setState({name: value}); // Note: update state with last entered value
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
    saveState({name: this.state.name});
    AsyncStorage.setItem('name', this.state.name); // Note: persist input
    next();
  };
  prevStep = () => {
    const {back} = this.props;
    // Go to previous step
    AsyncStorage.setItem('name', this.state.name); // Note: persist input
    back();
  };
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>What is your name?</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({name: text})}
          value={this.state.name}
          placeholderTextColor="#fff"
        />
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

export default step3;
