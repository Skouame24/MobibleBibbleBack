import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileMenuItems from '../components/profile/ProfileMenuItems';

export default function ProfileScreen() {
  const handleEditAvatar = () => {
    // Implémenter la logique de modification de l'avatar
    console.log('Modifier l\'avatar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ProfileHeader
            name="John Doe"
            email="john.doe@example.com"
            onEditAvatar={handleEditAvatar}
          />
          <ProfileStats />
          <ProfileMenuItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  content: {
    padding: 16,
    marginTop:50
  },
});