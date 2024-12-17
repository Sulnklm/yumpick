import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Typography } from "../styles/typography"; // Keep this if needed

const categoriesData = [
  {
    id: 1,
    name: "Christmas",
    image: require("../../assets/home/categories/christmas.png"),
  },
  {
    id: 2,
    name: "New Year",
    image: require("../../assets/home/categories/newyear.png"),
  },
  {
    id: 3,
    name: "Omakase",
    image: require("../../assets/home/categories/omakase.png"),
  },
  {
    id: 4,
    name: "Fine Dining",
    image: require("../../assets/home/categories/finedining.png"),
  },
  {
    id: 5,
    name: "Michelin",
    image: require("../../assets/home/categories/Michelin.png"),
  },
  {
    id: 6,
    name: "Celebrity Spots",
    image: require("../../assets/home/categories/CelebritySpots.png"),
  },
  {
    id: 7,
    name: "Outdoor Seating",
    image: require("../../assets/home/categories/outdoorseating.png"),
  },
  {
    id: 8,
    name: "Viral Dessert",
    image: require("../../assets/home/categories/ViralDessert.png"),
  },
];

// Get the device's screen width
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    height: 200,
  },
  categoryItem: {
    width: (windowWidth - 70) / 4, // 4 items per row
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    elevation: 3, // Add shadow on Android
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 5, // Spacing between image and text
    resizeMode: "contain",
  },
  categoryText: {
    fontSize: Typography.p.fontSize || 14, // Fallback if not defined
    color: "#333",
    textAlign: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default function SearchBox() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}
