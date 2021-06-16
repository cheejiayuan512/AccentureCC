import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Step1 from './components/steps/PhoneStep';
import Step2 from './components/steps/PhoneCodeStep';
import Step3 from './components/steps/NameStep';
import Step4 from './components/steps/BirthdayStep';
import Step5 from './components/steps/GenderStep';
import Step6 from './components/steps/SchoolStep';
import Step7 from './components/steps/PhotoStep';

import {AnimatedMultistep} from 'react-native-animated-multistep/lib';
import {onSignOutButtonPress} from '../../functions/functions';
import {SignOutButton} from '../LoginComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';

export const FireBaseStorage = storage();
const allSteps = [
  {name: 'step 1', component: Step7},
  {name: 'step 2', component: Step2},
  {name: 'step 3', component: Step3},
  {name: 'step 4', component: Step4},
  {name: 'step 5', component: Step5},
  {name: 'step 6', component: Step6},
  {name: 'step 7', component: Step1},
];
const clearAllData = () => {
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => console.log('success'));
};
export default class AccountCreation extends Component {
  constructor(props) {
    super(props);
    clearAllData();
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
        <View style={styles.lowerContainer}>
          <AnimatedMultistep
            steps={allSteps}
            onFinish={this.finish}
            animate={true}
            onBack={this.onBack}
            onNext={this.onNext}
          />
          <SignOutButton
            onPress={() => {
              onSignOutButtonPress().then(() => console.log('Signed out!'));
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  uppererContainer: {
    flex: 1,
    backgroundColor: '#2f3461',
  },

  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  loginText: {
    fontSize: 32,
    color: '#fff',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
