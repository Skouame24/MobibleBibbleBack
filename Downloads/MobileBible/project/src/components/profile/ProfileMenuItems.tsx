import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  {
    icon: 'bookmark-outline',
    label: 'Mes favoris',
  },
  {
    icon: 'notifications-outline',
    label: 'Notifications',
  },
  {
    icon: 'settings-outline',
    label: 'Paramètres',
  },
  {
    icon: 'help-circle-outline',
    label: 'Aide',
  },
  {
    icon: 'log-out-outline',
    label: 'Déconnexion',
    danger: true,
  },
];

export default function ProfileMenuItems() {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.menuItem,
            index === menuItems.length - 1 && styles.lastMenuItem,
          ]}
        >
          <View style={styles.menuContent}>
            <Ionicons
              name={item.icon}
              size={24}
              color={item.danger ? '#ff3b30' : '#000000'}
            />
            <Text
              style={[
                styles.menuLabel,
                item.danger && styles.dangerText,
              ]}
            >
              {item.label}
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={item.danger ? '#ff3b30' : '#666666'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000000',
  },
  dangerText: {
    color: '#ff3b30',
  },
});