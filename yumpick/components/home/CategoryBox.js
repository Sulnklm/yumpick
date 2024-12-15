import React from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Typography } from '../styles/typography'; 

const categoriesData = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Korean" },
  { id: 3, name: "Chinese" },
  { id: 4, name: "Japanese" },
  { id: 5, name: "American" },
  { id: 6, name: "Italian" },
  { id: 7, name: "Bakery" },
  { id: 8, name: "Coffee" }
];

// Get the device's screen width
const windowWidth = Dimensions.get('window').width;

// Styles for the CategoryBox component
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    height: 200,
  },
  categoryItem: {
    width: (windowWidth - 70) / 4, // Calculate 4 items per row with margins
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoryText: {
    fontSize: Typography.p.fontSize,  
    color: '#333',
    textAlign: 'center',
    flexShrink: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between', 
  },
});

export default function SearchBox() {
  return (
    <View style={styles.container}>
      {/* FlatList with numColumns set to 4 for grid layout */}
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text> 
          </View>
        )}
        numColumns={4}  // Display 4 items per row
        columnWrapperStyle={styles.columnWrapper}  // Style for spacing between columns
      />
    </View>
  );
}
