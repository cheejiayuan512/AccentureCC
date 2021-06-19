import {Avatar, Card, Paragraph, Text, Title} from 'react-native-paper';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const LeftContent = props => (
  <Avatar.Icon
    {...props}
    style={{backgroundColor: 'white', marginLeft: -5}}
    icon="cash-multiple"
  />
);
const RightContent = props => (
  <TouchableOpacity
    onPress={() => console.log('Pressed')}
    style={styles.whiteButton}>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
      }}>
      View Projects
    </Text>
  </TouchableOpacity>
);
export const ProductCard = () => (
  <Card>
    <Card.Title
      title={'Products On Discount'}
      subtitle={
        'Help reduce food waster and save! Products close to their sell-by dates are perfectly safe for consumption, but are available for a lower price.'
      }
    />
  </Card>
);
export const CardLayer = () => (
  <Card style={{marginBottom: '5%'}}>
    <Card.Title
      subtitle="Carbon Credits Saved"
      left={LeftContent}
      right={RightContent}
    />
    <Card.Actions />
    <Card.Content style={{marginTop: -25}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Title>57</Title>
          <Paragraph>Total</Paragraph>
        </View>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Title>50</Title>
          <Paragraph>Donated</Paragraph>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Title>7</Title>
          <Paragraph>Balance</Paragraph>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Paragraph>Carbon Dioxide Saved</Paragraph>
        <Paragraph>57 Metric Tons</Paragraph>
      </View>
    </Card.Content>
  </Card>
);
export const styles = {
  container: {
    flex: 1,
  },
  nav: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    width: '90%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  gallery: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    position: 'absolute',
    top: 160,
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
  },
  IOMOBtext: {
    flex: 1,
    color: '#FFF',
    textAlign: 'left',
    marginTop: '23%',
    marginLeft: '8%',
    fontWeight: '100',
    fontSize: 32,
  },
  welcometext: {
    color: '#00FFA7',
  },
  flavourText: {
    color: '#F0EFE7',
  },
  whiteButton: {
    backgroundColor: '#004dff',
    width: 100,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
    marginRight: 25,
  },
};
