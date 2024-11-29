import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const GRID_COLUMNS = 5;
const ITEM_MARGIN = 8;
const ITEM_SIZE = (width - 32 - (GRID_COLUMNS - 1) * ITEM_MARGIN) / GRID_COLUMNS;

interface BiblePickerProps {
  visible: boolean;
  onClose: () => void;
  selectedBook: string;
  selectedChapter: number;
  onSelectBook: (book: string) => void;
  onSelectChapter: (chapter: number) => void;
}

const BOOKS = [
  'Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome',
  'Josué', 'Juges', 'Ruth', '1 Samuel', '2 Samuel',
  // Ajouter d'autres livres selon vos besoins
];

const CHAPTERS_COUNT = {
  'Genèse': 50,
  'Exode': 40,
  'Lévitique': 27,
  // Ajouter le nombre de chapitres pour chaque livre
};

export default function BiblePicker({
  visible,
  onClose,
  selectedBook,
  selectedChapter,
  onSelectBook,
  onSelectChapter
}: BiblePickerProps) {
  const [mode, setMode] = useState<'book' | 'chapter'>('book');

  const renderBookList = () => (
    <ScrollView style={styles.scrollView}>
      {BOOKS.map((book) => (
        <TouchableOpacity
          key={book}
          style={[
            styles.bookItem,
            selectedBook === book && styles.selectedBookItem
          ]}
          onPress={() => {
            onSelectBook(book);
            setMode('chapter');
          }}
        >
          <Text style={[
            styles.bookText,
            selectedBook === book && styles.selectedBookText
          ]}>
            {book}
          </Text>
          <Ionicons 
            name="chevron-forward" 
            size={20} 
            color={selectedBook === book ? '#fff' : '#666'} 
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderChapterGrid = () => {
    const chaptersCount = CHAPTERS_COUNT[selectedBook] || 50;
    const chapters = Array.from({ length: chaptersCount }, (_, i) => i + 1);

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.chapterGrid}>
          {chapters.map((chapter) => (
            <TouchableOpacity
              key={chapter}
              style={[
                styles.chapterItem,
                selectedChapter === chapter && styles.selectedChapterItem
              ]}
              onPress={() => {
                onSelectChapter(chapter);
                onClose();
                setMode('book');
              }}
            >
              <Text style={[
                styles.chapterText,
                selectedChapter === chapter && styles.selectedChapterText
              ]}>
                {chapter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => {
                if (mode === 'chapter') {
                  setMode('book');
                } else {
                  onClose();
                }
              }}
              style={styles.headerButton}
            >
              <Ionicons 
                name={mode === 'chapter' ? 'arrow-back' : 'close'} 
                size={24} 
                color="#000" 
              />
            </TouchableOpacity>
            
            <Text style={styles.title}>
              {mode === 'book' ? 'Choisir un livre' : selectedBook}
            </Text>

            {mode === 'chapter' ? (
              <TouchableOpacity 
                style={styles.headerButton} 
                onPress={onClose}
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            ) : (
              <View style={styles.headerButton} />
            )}
          </View>

          {mode === 'book' ? renderBookList() : renderChapterGrid()}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  selectedBookItem: {
    backgroundColor: '#2196F3',
  },
  bookText: {
    fontSize: 16,
    color: '#000',
  },
  selectedBookText: {
    color: '#fff',
    fontWeight: '600',
  },
  chapterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  chapterItem: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: ITEM_MARGIN / 2,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedChapterItem: {
    backgroundColor: '#2196F3',
  },
  chapterText: {
    fontSize: 16,
    color: '#000',
  },
  selectedChapterText: {
    color: '#fff',
    fontWeight: '600',
  },
});