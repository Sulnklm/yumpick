import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const trendyData = [
  { id: '1', name: 'The Gourmet Grill', image: require('../../assets/home/restaurants/restaurant1.jpeg') },
  { id: '2', name: 'Pasta Paradise', image: require('../../assets/home/restaurants/restaurant2.jpeg') },
  { id: '3', name: 'Trendy Item 3', image: require('../../assets/home/restaurants/restaurant3.jpeg') },
  { id: '4', name: 'Bistro Delight', image: require('../../assets/home/restaurants/restaurant4.jpeg') },
];

export default function Trendy() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trendy</Text>
      
      {/* For data list */}
      <FlatList
        data={trendyData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 150,   
    height: 150, 
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
