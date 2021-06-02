import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Step1 from './components/steps/PhoneStep';
import Step2 from './components/steps/PhoneCodeStep';

import {AnimatedMultistep} from 'react-native-animated-multistep/lib';
import {onSignOutButtonPress} from '../../functions/functions';
import {SignOutButton} from '../LoginComponents';

const allSteps = [
  {name: 'step 1', component: Step1},
  {name: 'step 2', component: Step2},
  // {name: 'step 3', component: Step3},
  // {name: 'step 4', component: Step4},
];

export default class AccountCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onNext = () => {
    console.log('Next');
  };
  onBack = () => {
    console.log('Back');
  };

  finish = state => {
    console.log('TCL: App -> state', state);
  };

  render() {
    return (
      <View style={styles.uppererContainer}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}></Text>
        </View>
        <View style={styles.lowerContainer}>
          <AnimatedMultistep
            steps={allSteps}
            onFinish={this.finish}
            animate={true}
            onBack={this.onBack}
            onNext={this.onNext}
          />
        </View>
        <SignOutButton
          onPress={() => {
            onSignOutButtonPress().then(() => console.log('Signed out!'));
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  uppererContainer: {
    flex: 1,
    backgroundColor: '#2f3461'},

  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 32,
    color: '#fff',
  },
  lowerContainer: {
    flex: 2,
  },
});
