import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabIcon from './TabIcons';
import { ROUTES } from './constants';
import TestimonyScreen from '../screens/TestimonyScreen';
import BibleScreen from '../screens/BibleScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <TabIcon route={route} {...props} />,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 65,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
          backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#ffffff',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarBackground: Platform.OS === 'ios' ? () => (
          <BlurView
            tint="light"
            intensity={100}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        ) : undefined,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -5,
        },
      })}
    >
      <Tab.Screen 
        name={ROUTES.HOME} 
        component={HomeScreen}
      />
      <Tab.Screen 
        name={ROUTES.BIBLE} 
        component={BibleScreen}
      />
      <Tab.Screen 
        name={ROUTES.LIBRARY} 
        component={LibraryScreen}
      />
      <Tab.Screen 
        name={ROUTES.TESTIMONY} 
        component={TestimonyScreen}
      />
      <Tab.Screen 
        name={ROUTES.PROFILE} 
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;