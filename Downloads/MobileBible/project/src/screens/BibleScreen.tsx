import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import BibleHeader from '../components/bible/BibleHeader';
import BibleContent from '../components/bible/BibleContent';
import BibleFooter from '../components/bible/BibleFooter';
import BiblePicker from '../components/bible/BiblePicker';
import SearchModal from '../components/SearchModal';
import SettingsModal from '../components/SettingModal';

export default function BibleScreen() {
  const [selectedBook, setSelectedBook] = useState('Genèse');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  
  const scrollY = useSharedValue(0);
  const chapterOpacity = useSharedValue(1);

  const headerStyle = useAnimatedStyle(() => ({
    opacity: withSpring(scrollY.value > 50 ? 0.9 : 1),
    transform: [{ translateY: withSpring(scrollY.value > 50 ? -10 : 0) }],
  }));

  const chapterStyle = useAnimatedStyle(() => ({
    opacity: withSpring(chapterOpacity.value),
  }));

  const handleScroll = (event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const handleChapterChange = (newChapter: number) => {
    chapterOpacity.value = 0;
    setTimeout(() => {
      setSelectedChapter(newChapter);
      chapterOpacity.value = 1;
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <BibleHeader
          book={selectedBook}
          chapter={selectedChapter}
          onOpenPicker={() => setPickerVisible(true)}
          onOpenSearch={() => setSearchVisible(true)}
          onOpenSettings={() => setSettingsVisible(true)}
        />
      </Animated.View>

      <Animated.View style={[styles.content, chapterStyle]}>
        <BibleContent
          book={selectedBook}
          chapter={selectedChapter}
          fontSize={fontSize}
          lineHeight={lineHeight}
          onScroll={handleScroll}
        />
      </Animated.View>

      <BibleFooter
        currentChapter={selectedChapter}
        maxChapters={50}
        onPreviousChapter={() => handleChapterChange(Math.max(1, selectedChapter - 1))}
        onNextChapter={() => handleChapterChange(Math.min(50, selectedChapter + 1))}
        onBookmark={(id) => console.log(`Marque-page ajouté pour le chapitre ${id}`)}
        onHighlight={(id, color) => console.log(`Surlignage pour le chapitre ${id} avec la couleur ${color}`)}
        onShare={(id) => console.log(`Partage du chapitre ${id}`)}
      />

      <BiblePicker
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
        selectedBook={selectedBook}
        selectedChapter={selectedChapter}
        onSelectBook={setSelectedBook}
        onSelectChapter={handleChapterChange}
      />

      <SearchModal
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onSearch={(query) => console.log('Recherche:', query)}
      />

      <SettingsModal
        visible={settingsVisible}
        onClose={() => setSettingsVisible(false)}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        lineHeight={lineHeight}
        onLineHeightChange={setLineHeight}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    zIndex: 10,
  },
  content: {
    flex: 1,
  },
});