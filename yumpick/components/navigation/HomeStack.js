import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen"; // 기존 HomeScreen
import TrendySeeAll from "../../screens/TrendySeeAll"; // 새로운 See All 페이지
import CategoryScreen from "../../screens/CategoryScreen";
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      {/* HomeScreen 유지 */}
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      {/* See All 페이지 추가 */}
      <Stack.Screen 
        name="TrendySeeAll" 
        component={TrendySeeAll} 
        options={{ title: "See All" }} 
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ title: "Restaurants" }}
      />
    </Stack.Navigator>
  );
}
