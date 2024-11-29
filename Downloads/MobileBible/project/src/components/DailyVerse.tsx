import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyVerse() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Verset du Jour</Text>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.verse}>
        "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
      </Text>
      <View style={styles.footer}>
        <Text style={styles.reference}>Jean 3:16</Text>
        <TouchableOpacity style={styles.copyButton}>
          <Ionicons name="copy-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 20,
    margin: 16,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  verse: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reference: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  copyButton: {
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
});