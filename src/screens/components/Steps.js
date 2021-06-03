import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import StepsContext from '../context/stepsContext';
import StepHeader from './stepbar/StepHeader';
import StepContent from './stepbar/StepContent';
import PhoneStep from './steps/PhoneStep';
import PhoneCodeStep from './steps/PhoneCodeStep';
import NameStep from './steps/NameStep';
import BirthdayStep from './steps/BirthdayStep';
import GenderStep from './steps/GenderStep';
import SchoolStep from './steps/SchoolStep';
import ActivityStep from './steps/ActivityStep';
import PhotoStep from './steps/PhotoStep';
const allSteps = [
  {name: 'Phone', component: PhoneStep},
  {name: 'Phone Code', component: PhoneCodeStep},
  {name: 'Name', component: NameStep},
  {name: 'Birthday', component: BirthdayStep},
];
const Steps = () => {
  const stepsContext = useContext(StepsContext);
  const {setSteps, setCurrentStep} = stepsContext;
  const onNext = () => {
    console.log('Next');
  };

  /* define the method to be called when you go on back step */

  const onBack = () => {
    console.log('Back');
  };
  const finish = finalState => {
    console.log(finalState);
  };

  useEffect(() => {
    setSteps([
      {
        title: 'Phone',
        component: () => <PhoneStep />,
      },
      {
        title: 'Phone Code',
        component: () => <PhoneCodeStep />,
      },
      {
        title: 'Name',
        component: () => <NameStep />,
      },
      {
        title: 'Birthday',
        component: () => <BirthdayStep />,
      },
      {
        title: 'Gender',
        component: () => <GenderStep />,
      },
      {
        title: 'Universities',
        component: () => <SchoolStep />,
      },
      {
        title: 'Preferred Activities',
        component: () => <ActivityStep />,
      },
      {
        title: 'Photos',
        component: () => <PhotoStep />,
      },
    ]);
    setCurrentStep(1);
  }, []);

  return (
    <View style={styles.container}>
      <StepHeader />
      <StepContent />
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
