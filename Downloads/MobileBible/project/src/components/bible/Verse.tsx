import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface VerseProps {
  id: number;
  text: string;
  fontSize: number;
  lineHeight: number;
  onBookmark: () => void;
  onHighlight: (color: string) => void;
  onShare: () => void;
}

export default function Verse({
  id,
  text,
  fontSize,
  lineHeight,
  onBookmark,
  onHighlight,
  onShare,
}: VerseProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.verseNumber, { fontSize }]}>{id}</Text>
      <View style={styles.verseContent}>
        <Text style={[styles.verseText, { fontSize, lineHeight: fontSize * lineHeight }]}>
          {text}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={onBookmark}>
            <Ionicons name="bookmark-outline" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onHighlight('#FFD700')}>
            <Ionicons name="color-wand-outline" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Ionicons name="share-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  verseNumber: {
    width: 30,
    color: '#666',
    fontWeight: '600',
  },
  verseContent: {
    flex: 1,
  },
  verseText: {
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    opacity: 0.7,
  },
});