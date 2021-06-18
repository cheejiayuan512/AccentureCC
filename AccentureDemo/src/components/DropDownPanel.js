import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet, Button, Animated} from 'react-native';
import {Card, Colors, IconButton} from 'react-native-paper';

function CollapseView() {
  const [collapsed, setCollapsed] = useState(true);
  const [maxLines, setMaxLines] = useState(2);
  const animationHeight = useRef(new Animated.Value(0)).current;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const collapseView = () => {
    Animated.timing(animationHeight, {
      duration: 500,
      toValue: 80,
      useNativeDriver: false,
    }).start();
  };

  const expandView = () => {
    setMaxLines(null);
    Animated.timing(animationHeight, {
      duration: 500,
      toValue: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (collapsed) {
      collapseView();
    } else {
      expandView();
    }
  }, [collapsed]);
  const RightContent = () => (
    <IconButton
      icon={collapsed?"chevron-down":"chevron-up"}
      color={Colors.black}
      size={25}
      onPress={toggleCollapsed}
    />
  );
  return (
    <Card>
      <View style={{overflow: 'hidden'}}>
        <Card.Title title="What you want" right={RightContent} />
        <Animated.View style={{maxHeight: animationHeight}}>
          <Text style={styles.paragraph} numberOfLines={maxLines}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Animated.View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CollapseView;
