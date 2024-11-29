import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const books = [
  {
    id: '1',
    title: 'La Vie de Prière',
    author: 'John Smith',
    cover: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Foi et Persévérance',
    author: 'Marie Johnson',
    cover: 'https://via.placeholder.com/150',
  },
];

export default function BookList() {
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row bg-gray-100 p-3 rounded-lg mb-3">
          <Image
            source={{ uri: item.cover }}
            className="w-20 h-28 rounded-md"
          />
          <View className="ml-3 flex-1 justify-center">
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-gray-500">{item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}