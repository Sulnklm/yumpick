import React from "react";
import { FlatList, View, Image, Dimensions } from "react-native";
import tw from "twrnc";
import { Text } from '../styles/Text'; // Import the custom Text component
import { Colors } from "../styles/Colors";
// JSON 데이터 불러오기
const categoriesData = require("../../assets/data/home.json");

// Image mapping based on the file names in your assets
const imageMapping = {
  "christmas.png": require("../../assets/home/categories/christmas.png"),
  "newyear.png": require("../../assets/home/categories/newyear.png"),
  "omakase.png": require("../../assets/home/categories/omakase.png"),
  "finedining.png": require("../../assets/home/categories/finedining.png"),
  "Michelin.png": require("../../assets/home/categories/Michelin.png"),
  "CelebritySpots.png": require("../../assets/home/categories/CelebritySpots.png"),
  "outdoorseating.png": require("../../assets/home/categories/outdoorseating.png"),
  "ViralDessert.png": require("../../assets/home/categories/ViralDessert.png"),
};

// Get the device's screen width
const windowWidth = Dimensions.get("window").width;

export default function CategoryBox() {
  return (
    <View style={tw`h-50 mt-5`}>
      <FlatList
        data={categoriesData.categories} // Make sure you're using the correct section from the JSON
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`w-[${(windowWidth - 80) / 4}px] h-20 items-center justify-center m-2 bg-white`}>
            <Image source={imageMapping[item.image]} style={tw`w-10 h-10 mb-2 object-contain`} />
            <Text style={tw`text-center`} type="caption">{item.name}</Text>
          </View>
        )}
        numColumns={4}
        columnWrapperStyle={tw`justify-between`}
        scrollEnabled={true}
      />
    </View>
  );
}
