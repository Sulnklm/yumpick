import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCompass,
  faBook,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { createStackNavigator } from "@react-navigation/stack"; // StackNavigator 추가
// Import screens for navigation
import HomeScreen from "./screens/HomeScreen";
import BrowseScreen from "./screens/BrowseScreen";
import ReservationsScreen from "./screens/ReservationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FavoritesScreen from "./screens/Favorites";
import PostDetail from "./screens/PostDetail";  // Import PostDetailScreen

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Create a stack navigator for BrowseScreen and PostDetail
const BrowseStack = createStackNavigator();

function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name="Browse"
        component={BrowseScreen}
        options={{ headerShown: false }}
      />
      <BrowseStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ headerShown: false }}  // Hide header in PostDetail
      />
    </BrowseStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#393939", // Active tab color
          tabBarInactiveTintColor: "#757575", // Inactive tab color
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}  // Update to BrowseStackScreen for navigation
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={23} /> // Home tab icon
            ),
          }}
        />
        <Tab.Screen
          name="Browse"
          component={BrowseStackScreen}  // Set BrowseStackScreen here
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faCompass} color={color} size={23} /> // Browse tab icon
            ),
          }}
        />
        <Tab.Screen
          name="Reservations"
          component={ReservationsScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Reservations",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faBook} color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHeart} color={color} size={23} /> // Favorites icon
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={23} /> // Profile icon
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
