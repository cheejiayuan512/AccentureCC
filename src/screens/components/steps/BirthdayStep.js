import React, {Component} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      date: new Date(),
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
    saveState({birthday: this.state.date});
    next();
  };
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>What is your birthday?</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        <DatePicker
          date={this.state.date}
          onDateChange={dateInput => {
            this.setState({date: dateInput});
            console.log(dateInput);
          }}
          mode={'date'}
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

export default step4;
