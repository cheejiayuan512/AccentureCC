import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton, Text, TextInput} from 'react-native-paper';

export class step6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      university: 'NTU',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('university')
      .then(value => {
        if (value !== null) {
          // saved input is available
          this.setState({university: value}); // Note: update state with last entered value
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
    saveState({university: this.state.university});
    AsyncStorage.setItem('university', this.state.university); // Note: persist input
    next();
  };
  prevStep = () => {
    const {back} = this.props;
    // Go to previous step
    AsyncStorage.setItem('university', this.state.university); // Note: persist input
    back();
  };
  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>I come from...</Text>
        </View>
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        <RadioButton.Group
          onValueChange={newValue =>
            this.setState({university: newValue}, () => {
              console.log(this.state.university);
            })
          }
          value={this.state.university}>
          <View>
            <Text >NTU</Text>
            <RadioButton value="NTU" />
          </View>
          <View>
            <Text >NUS</Text>
            <RadioButton value="NUS" />
          </View>
          <View>
            <Text >SMU</Text>
            <RadioButton value="SMU" />
          </View>
          <View>
            <Text >SUTD</Text>
            <RadioButton value="SUTD" />
          </View>
          <View>
            <Text >SIT</Text>
            <RadioButton value="SIT" />
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

export default step6;
