import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton, Text, TextInput} from 'react-native-paper';

export class step7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      gender: 'Male',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('gender')
      .then(value => {
        if (value !== null) {
          // saved input is available
          this.setState({gender: value}); // Note: update state with last entered value
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
    saveState({gender: this.state.gender});
    AsyncStorage.setItem('gender', this.state.gender); // Note: persist input
    next();
  };
  prevStep = () => {
    const {back} = this.props;
    // Go to previous step
    AsyncStorage.setItem('gender', this.state.gender); // Note: persist input
    back();
  };
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>I want to pair with...</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        <RadioButton.Group
          onValueChange={newValue =>
            this.setState({gender: newValue}, () => {
              console.log(this.state.gender);
            })
          }
          value={this.state.gender}>
          <View>
            <Text style={styles.loginText}>Guys!</Text>
            <RadioButton value="Male" />
          </View>
          <View>
            <Text style={styles.loginText}>Girls!</Text>
            <RadioButton value="Female" />
          </View>
          <View>
            <Text style={styles.loginText}>Everybody!</Text>
            <RadioButton value="All" />
          </View>
        </RadioButton.Group>
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
