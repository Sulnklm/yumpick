import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBox } from '../components/home/SearchBox';
import CategoryBox from "../components/home/CategoryBox"
import Map from "../components/home/Map"
import Trendy from '../components/home/Trendy';
import { Colors } from '../components/styles/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchBox />
      <CategoryBox />
      {/* <Map /> */}
      <Trendy />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
