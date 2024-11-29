import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BibleFooterProps {
  currentChapter: number;
  maxChapters: number;
  onPreviousChapter: () => void;
  onNextChapter: () => void;
  onBookmark: (verseId: number) => void;
  onHighlight: (verseId: number, color: string) => void;
  onShare: (verseId: number) => void;
}

export default function BibleFooter({
  currentChapter,
  maxChapters,
  onPreviousChapter,
  onNextChapter,
  onBookmark,
  onHighlight,
  onShare,
}: BibleFooterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        {/* Bouton pour le chapitre précédent */}
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={onPreviousChapter} 
          accessibilityLabel="Chapitre précédent"
          accessibilityHint="Navigue au chapitre précédent de ce livre"
        >
          <Ionicons name="chevron-back" size={24} color="#666" />
        </TouchableOpacity>

        <View style={styles.actions}>
          {/* Bouton de marque-page */}
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onBookmark(currentChapter)}
            accessibilityLabel="Ajouter un marque-page"
          >
            <Ionicons name="bookmark-outline" size={24} color="#666" />
          </TouchableOpacity>
          
          {/* Bouton de surlignage */}
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onHighlight(currentChapter, '#FFD700')}
            accessibilityLabel="Surligner"
            accessibilityHint="Surligne le chapitre en jaune"
          >
            <Ionicons name="color-wand-outline" size={24} color="#FFD700" />
          </TouchableOpacity>
          
          {/* Bouton de partage */}
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onShare(currentChapter)}
            accessibilityLabel="Partager ce chapitre"
          >
            <Ionicons name="share-social-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Bouton pour le chapitre suivant */}
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={onNextChapter} 
          accessibilityLabel="Chapitre suivant"
          accessibilityHint="Navigue au chapitre suivant de ce livre"
          disabled={currentChapter >= maxChapters}
        >
          <Ionicons name="chevron-forward" size={24} color={currentChapter >= maxChapters ? '#CCC' : '#666'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});
