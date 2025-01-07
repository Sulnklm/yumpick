import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";

// Import restaurant data
const restaurantData = require("../../assets/data/restaurants.json");

// Image mapping for restaurant images
const restaurantImageMapping = {
  restaurant1: require("../../assets/restaurants/restaurant1.png"),
  restaurant2: require("../../assets/restaurants/restaurant2.png"),
  restaurant3: require("../../assets/restaurants/restaurant3.png"),
  restaurant4: require("../../assets/restaurants/restaurant4.png"),
  restaurant5: require("../../assets/restaurants/restaurant5.png"),
  restaurant6: require("../../assets/restaurants/restaurant6.png"),
  restaurant7: require("../../assets/restaurants/restaurant7.png"),
  restaurant8: require("../../assets/restaurants/restaurant8.png"),
  restaurant9: require("../../assets/restaurants/restaurant9.png"),
  restaurant10: require("../../assets/restaurants/restaurant10.png"),
};

export default function CategoryDetails({ route }) {
  const { category } = route.params;

  // Filter restaurants based on the category
  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.category.includes(category)
  );

  // Handle the case when no restaurants are found for the selected category
  if (filteredRestaurants.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <Text style={tw`text-lg text-gray-500`}>
          No restaurants found for {category}
        </Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 p-4 bg-gray-100`}>
      <Text style={tw`text-xl font-bold mb-4`}>{category} Restaurants</Text>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {restaurantImageMapping[item.image] ? (
              <Image
                source={restaurantImageMapping[item.image]}
                style={styles.image}
              />
            ) : (
              <View style={styles.placeholderImage} />
            )}
            <View style={styles.info}>
              <Text style={tw`text-lg font-bold`}>{item.title}</Text>
              <Text style={tw`text-gray-600`}>{item.location}</Text>
              <Text style={tw`text-gray-500`}>
                {item.isOpen ? "Open Now" : "Closed"} - {item.hours}
              </Text>
              <Text style={tw`text-yellow-600`}>
                ⭐ {item.rating} ({item.reviews} reviews)
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  placeholderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#d3d3d3", // Gray placeholder for missing images
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "space-around",
  },
});
