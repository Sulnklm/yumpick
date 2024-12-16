import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass,faBook, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { ActivityIndicator } from 'react-native';

import { useFonts } from 'expo-font'; // Import font loading hook

// Import screens for navigation
import HomeScreen from "./screens/HomeScreen";
import BrowseScreen from "./screens/BrowseScreen";
import ReservationsScreen from "./screens/ReservationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {

  // Load custom fonts using Expo's useFonts hook
  const [fontsLoaded] = useFonts({
    'Sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'Sans-semiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'Sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Sans-light': require('./assets/fonts/OpenSans-Light.ttf')
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />; // Show spinner until fonts are loaded
  }

  return (
    <NavigationContainer>
      {/* Bottom Tab Navigation */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#8C52FF', // Active tab color
          tabBarInactiveTintColor: '#c6c5ed' // Inactive tab color
        }}
      >
        {/* Home Tab */}
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size} /> // Home tab icon
            )
          }}
        />
        <Tab.Screen 
          name='Browse'
          component={BrowseScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faCompass} color={color} size={size} /> // Home tab icon
            )
          }}
        />
        {/* Reservations Tab */}
        <Tab.Screen 
          name='Info'
          component={ReservationsScreen}
          options={{
            headerTitle: 'Reservations', // Set header title
            tabBarLabel: 'Reservations', // Tab label
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBook} color={color} size={size} /> // Book icon for Reservations
            )
          }}
        />
        {/* Profile Tab */}
        <Tab.Screen 
          name='Profile'
          component={ProfileScreen}
          options={{
            title: 'Profile', // Tab header title
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size} /> // User icon for Profile
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>    
  );
}
