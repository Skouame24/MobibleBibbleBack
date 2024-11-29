import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Verse from './Verse';

interface BibleContentProps {
  book: string;
  chapter: number;
  fontSize: number;
  lineHeight: number;
  onScroll: (event: any) => void;
  onBookmark: (verseId: number) => void;
  onHighlight: (verseId: number, color: string) => void;
  onShare: (verseId: number) => void;
}

export default function BibleContent({
  book,
  chapter,
  fontSize,
  lineHeight,
  onScroll,
  onBookmark,
  onHighlight,
  onShare,
}: BibleContentProps) {
  // Exemple de versets (à remplacer par une vraie API)
  const verses = [
    { id: 1, text: "Au commencement, Dieu créa les cieux et la terre." },
    { id: 2, text: "La terre était informe et vide; il y avait des ténèbres à la surface de l'abîme, et l'Esprit de Dieu se mouvait au-dessus des eaux." }
  ];

  return (
    <ScrollView
      style={styles.container}
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        {verses.map(verse => (
          <Verse
            key={verse.id}
            id={verse.id}
            text={verse.text}
            fontSize={fontSize}
            lineHeight={lineHeight}
            onBookmark={() => onBookmark(verse.id)}
            onHighlight={(color) => onHighlight(verse.id, color)}
            onShare={() => onShare(verse.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 16,
  },
});