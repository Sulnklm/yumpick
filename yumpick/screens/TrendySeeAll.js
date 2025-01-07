import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import tw from "twrnc";

const trendyData = [
  {
    id: "1",
    name: "The Gourmet Grill",
    image: require("../assets/home/restaurants/restaurant1.jpeg"),
  },
  {
    id: "2",
    name: "Pasta Paradise",
    image: require("../assets/home/restaurants/restaurant2.jpeg"),
  },
  {
    id: "3",
    name: "Trendy Item 3",
    image: require("../assets/home/restaurants/restaurant3.jpeg"),
  },
  {
    id: "4",
    name: "Bistro Delight",
    image: require("../assets/home/restaurants/restaurant4.jpeg"),
  },
];

export default function TrendySeeAll() {
  return (
    <View style={tw`px-5`}>
      <Text style={tw`text-lg font-bold mb-4`}>All Trendy Items</Text>
      <FlatList
        data={trendyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`flex-row gap-5 items-center mb-3`}>
            <Image source={item.image} style={tw`w-25 h-25 rounded-lg`} />
            <Text style={tw`text-black text-lg`}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
