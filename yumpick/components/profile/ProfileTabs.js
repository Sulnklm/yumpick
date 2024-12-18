import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Typography } from '../styles/Typography';

// image data
const imageData = [
  { id: '1', image: require('../../assets/home/restaurants/restaurant1.jpeg') },
  { id: '2', image: require('../../assets/home/restaurants/restaurant2.jpeg') },
  { id: '3', image: require('../../assets/home/restaurants/restaurant3.jpeg') },
  { id: '4', image: require('../../assets/home/restaurants/restaurant4.jpeg') },
  { id: '5', image: require('../../assets/home/restaurants/restaurant1.jpeg') },
  { id: '6', image: require('../../assets/home/restaurants/restaurant2.jpeg') },
  { id: '7', image: require('../../assets/home/restaurants/restaurant3.jpeg') },
  { id: '8'},
  { id: '9'},
];

export default function ProfileTabs() {
  return (
    <View style={styles.container}>
      {/* Tab Titles */}
      <View style={styles.tabsContainer}>
        <Text style={Typography.h2}>Posts</Text>
        <Text style={[Typography.h2, { color: '#AAAAAA' }]}>My Reviews</Text>
        <Text style={[Typography.h2, { color: '#AAAAAA' }]}>My Top 10</Text>
      </View>

      {/* Image Grid */}
      <FlatList
        data={imageData}
        numColumns={3} // 3 images per row
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        style={styles.imageGrid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  imageGrid: {
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%', // Makes image fill container width
    height: 120,
    borderRadius: 10,
  },
});
