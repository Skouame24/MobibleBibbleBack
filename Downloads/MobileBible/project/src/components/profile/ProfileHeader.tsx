import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileAvatar from './ProfileAvatar';

interface ProfileHeaderProps {
  name: string;
  email: string;
  onEditAvatar: () => void;
}

export default function ProfileHeader({ name, email, onEditAvatar }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <ProfileAvatar name={name} onEdit={onEditAvatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666666',
  },
});