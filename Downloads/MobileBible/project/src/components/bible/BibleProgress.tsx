import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const BibleProgress = ({ progress }) => {
  const progressStyle = useAnimatedStyle(() => ({
    width: withSpring(width * progress),
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progress, progressStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#000',
  },
});

export default BibleProgress;  // Assure-toi que c'est bien exporté
