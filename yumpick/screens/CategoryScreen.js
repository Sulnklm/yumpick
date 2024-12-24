import React from "react";
import { View, FlatList } from "react-native";
import RestaurantBox from "../components/global/RestaurantBox"; // RestaurantBox 가져오기
import tw from "twrnc";

const restaurants = [
  {
    id: 1,
    image: require("../assets/home/restaurants/restaurant1.jpeg"),
    title: "Black Anchor Steakhouse",
    location: "Vancouver",
    category: "Italian",
    rating: 4.9,
    reviews: 1038,
    isOpen: true,
    hours: "Closes 10 p.m.",
  },
  {
    id: 2,
    image: require("../assets/home/restaurants//restaurant1.jpeg"),
    title: "Sushi Paradise",
    location: "Vancouver",
    category: "Japanese",
    rating: 4.7,
    reviews: 859,
    isOpen: false,
    hours: "Opens 11 a.m.",
  },
];

export default function CategoryScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-white p-3`}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`pb-3`}>
            <RestaurantBox
              restaurant={item}
              onPress={() => navigation.navigate("Details", { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}
