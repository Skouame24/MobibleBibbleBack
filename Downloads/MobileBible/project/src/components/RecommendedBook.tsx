import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RecommendedBook() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>La Puissance de la Prière</Text>
        <Text style={styles.author}>Par David Wilson</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={16} color="#666666" />
            <Text style={styles.statText}>15 min</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="book-outline" size={16} color="#666666" />
            <Text style={styles.statText}>180 pages</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#666666',
  },
});