import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faBook, faUser } from '@fortawesome/free-solid-svg-icons'; 
// Import screens for navigation
import HomeScreen from "./screens/HomeScreen";
import BrowseScreen from "./screens/BrowseScreen";
import ReservationsScreen from "./screens/ReservationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#393939', // Active tab color
          tabBarInactiveTintColor: '#757575', // Inactive tab color
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} color={color} size={23} /> // Home tab icon
            )
          }}
        />
        <Tab.Screen 
          name="Browse"
          component={BrowseScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faCompass} color={color} size={23} /> // Browse tab icon
            )
          }}
        />
        <Tab.Screen 
          name="Info"
          component={ReservationsScreen}
          options={{
            headerTitle: 'Reservations', 
            tabBarLabel: 'Reservations', 
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBook} color={color} size={23} />
            )
          }}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile', 
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faUser} color={color} size={23} /> // User icon for Profile
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>    
  );
}
