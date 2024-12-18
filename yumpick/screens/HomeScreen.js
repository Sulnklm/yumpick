import React from 'react';
import { View } from 'react-native';
import { SearchBox } from '../components/global/SearchBox';
import CategoryBox from "../components/home/CategoryBox";
import Trendy from '../components/home/Trendy';
import { Colors } from '../components/styles/Colors';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <SearchBox />
      <CategoryBox />
<<<<<<< Updated upstream
      <Map />
=======
>>>>>>> Stashed changes
      <Trendy />
    </View>
  );
}
