import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const books = ['Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome'];

export default function BibleBookList() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
      {books.map((book, index) => (
        <TouchableOpacity
          key={index}
          className="mr-2 bg-gray-100 px-4 py-2 rounded-full"
        >
          <Text className="text-black">{book}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}