import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BibleHeaderProps {
  book: string;
  chapter: number;
  onOpenPicker: () => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
}

export default function BibleHeader({
  book,
  chapter,
  onOpenPicker,
  onOpenSearch,
  onOpenSettings,
}: BibleHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={onOpenPicker}>
        <Text style={styles.bookTitle}>{book}</Text>
        <Text style={styles.chapterTitle}>{chapter}</Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onOpenSearch}>
          <Ionicons name="search" size={22} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onOpenSettings}>
          <Ionicons name="settings-outline" size={22} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  chapterTitle: {
    fontSize: 20,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    padding: 8,
  },
});