import React, { useState } from 'react';
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
  const [showActions, setShowActions] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => setShowActions(true)}
      activeOpacity={0.7}
    >
      <Text style={styles.verseNumber}>{id}</Text>
      <View style={styles.verseContent}>
        <Text style={[
          styles.verseText,
          {
            fontSize,
            lineHeight: fontSize * lineHeight,
          }
        ]}>
          {text}
        </Text>
        
        {showActions && (
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={onBookmark}>
              <Ionicons name="bookmark-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => onHighlight('#FFE082')}>
              <Ionicons name="color-wand-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onShare}>
              <Ionicons name="share-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  verseNumber: {
    width: 30,
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  verseContent: {
    flex: 1,
  },
  verseText: {
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});