import React from 'react';
import { View } from 'react-native';
import { SearchBox } from '../components/global/SearchBox';
import Banner from '../components/home/Banner';
import Categories from "../components/home/Categories";
import Trendy from '../components/home/Trendy';
import { Colors } from '../components/styles/Colors';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: Colors.background }}>
      <SearchBox />
      <Banner/>
      <Categories />
      <Trendy />
    </View>
  );
}
