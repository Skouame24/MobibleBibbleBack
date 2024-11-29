import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const VerseCard = ({ number, text, isBookmarked = false }) => {
  const [bookmarked, setBookmarked] = React.useState(isBookmarked);

  return (
    <View style={styles.container}>
      <View style={styles.verseContent}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity 
          onPress={() => setBookmarked(!bookmarked)}
          style={styles.actionButton}
        >
          <Ionicons 
            name={bookmarked ? 'bookmark' : 'bookmark-outline'} 
            size={18} 
            color={bookmarked ? '#000' : '#666'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  verseContent: {
    flexDirection: 'row',
    gap: 12,
  },
  number: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    width: 24,
    textAlign: 'right',
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginTop: 8,
    paddingLeft: 36,
  },
  actionButton: {
    padding: 8,
  },
});

export default VerseCard;