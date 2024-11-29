import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Tous', 'Foi', 'Guérison', 'Conversion', 'Miracle', 'Vidéo', 'Audio'];

export default function TestimonyCategories() {
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategory
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={[
            styles.categoryText,
            selectedCategory === category && styles.selectedCategoryText
          ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCategory: {
    backgroundColor: '#000',
  },
  categoryText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#FFF',
  },
});