import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BibleReader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genèse 1</Text>
      <Text style={styles.content}>
        Au commencement, Dieu créa les cieux et la terre. La terre était informe et vide...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});