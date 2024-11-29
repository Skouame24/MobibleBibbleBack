import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TAB_ICONS } from './constants';

const TabIcon = ({ route, focused, color, size }) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: focused ? 1.2 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused]);

  const iconName = focused 
    ? TAB_ICONS[route.name]?.active 
    : TAB_ICONS[route.name]?.inactive;

  return (
    <Animated.View style={[
      styles.container,
      focused && styles.focusedContainer,
      { transform: [{ scale }] }
    ]}>
      <Ionicons name={iconName} size={size} color={color} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
  },
  focusedContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default TabIcon;