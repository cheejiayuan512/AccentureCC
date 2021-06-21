import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet, Button, Animated} from 'react-native';
import {Card, Colors, IconButton} from 'react-native-paper';
import {List} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
const LandingListItem = ({title, description, icon, quantity}) => (
  <List.Item
    title={title}
    description={description}
    left={() => <List.Icon icon={icon} />}
    right={() => <Text style={{alignSelf: 'center'}}>{quantity}</Text>}
  />
);
const CollapseView = ({setScroll, title, subtitle}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setScroll(!collapsed);
  };

  const RightContent = () => (
    <IconButton
      icon={collapsed ? 'chevron-down' : 'chevron-up'}
      color={Colors.black}
      size={25}
      onPress={toggleCollapsed}
    />
  );
  return (
    <Card style={{marginBottom: '5%'}}>
      <Card.Title title={title} right={RightContent} subtitle={subtitle}/>
      <Collapsible collapsed={collapsed}>
        <View>
          <LandingListItem title={'Milk'} icon={'cow'} quantity={'2L'} />
          <LandingListItem
            title={'Pineapple Juice'}
            icon={'bottle-soda-outline'}
            quantity={'1 bottle'}
          />
          <LandingListItem
            title={'Chicken Breast'}
            icon={'food-drumstick-outline'}
            quantity={'500g'}
          />
          <LandingListItem
            title={'Tomatoes'}
            icon={'sprout-outline'}
            quantity={'4 medium'}
          />
          <LandingListItem
            title={'Detergent'}
            icon={'bottle-tonic-skull-outline'}
            quantity={'1 bottle'}
          />
        </View>
      </Collapsible>
    </Card>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CollapseView;
export {LandingListItem};
