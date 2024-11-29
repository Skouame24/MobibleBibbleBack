import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BibleService from '../services/BibleService';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectVerse: (book: string, chapter: number, verseId: number) => void;
}

export default function SearchModal({ visible, onClose, onSelectVerse }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ book: string; chapter: number; verse: { id: number; text: string } }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length < 3) return;

    setIsLoading(true);
    try {
      const searchResults = await BibleService.searchVerses(text);
      setResults(searchResults);
    } catch (error) {
      console.error('Erreur de recherche:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher un verset..."
              value={query}
              onChangeText={handleSearch}
              autoFocus
            />
          </View>

          {isLoading ? (
            <ActivityIndicator style={styles.loader} />
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item, index) => `${item.book}-${item.chapter}-${item.verse.id}-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() => {
                    onSelectVerse(item.book, item.chapter, item.verse.id);
                    onClose();
                  }}
                >
                  <Text style={styles.reference}>
                    {item.book} {item.chapter}:{item.verse.id}
                  </Text>
                  <Text style={styles.verseText} numberOfLines={2}>
                    {item.verse.text}
                  </Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                query.length > 2 ? (
                  <Text style={styles.emptyText}>Aucun résultat trouvé</Text>
                ) : (
                  <Text style={styles.emptyText}>
                    Entrez au moins 3 caractères pour rechercher
                  </Text>
                )
              }
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    padding: 8,
  },
  loader: {
    marginTop: 20,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  reference: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  verseText: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});