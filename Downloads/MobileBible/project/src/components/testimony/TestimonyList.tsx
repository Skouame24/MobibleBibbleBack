import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TestimonyCard from './TestimonyCard';

const testimonies = [
  {
    id: '1',
    author: 'Marie L.',
    title: 'Ma rencontre avec Dieu',
    content: 'Un témoignage inspirant sur ma conversion...',
    mediaType: 'text',
    likes: 24,
    comments: 5,
    category: 'Conversion',
    timestamp: 'Il y a 2 heures',
  },
  {
    id: '2',
    author: 'Jean P.',
    title: 'La puissance de la prière',
    mediaType: 'audio',
    mediaUrl: 'https://example.com/audio.mp3',
    likes: 18,
    comments: 3,
    category: 'Foi',
    timestamp: 'Il y a 5 heures',
  },
  {
    id: '3',
    author: 'Sophie M.',
    title: 'Miracle de guérison',
    mediaType: 'video',
    mediaUrl: 'https://example.com/video.mp4',
    likes: 45,
    comments: 12,
    category: 'Guérison',
    timestamp: 'Hier',
  },
];

export default function TestimonyList() {
  return (
    <FlatList
      data={testimonies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TestimonyCard testimony={item} />}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingBottom: 16,
  },
});