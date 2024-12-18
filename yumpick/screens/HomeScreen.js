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
<<<<<<< HEAD
<<<<<<< Updated upstream
      <Map />
=======
>>>>>>> Stashed changes
=======
      {/* <Map /> */}
>>>>>>> 6fee2f9cb8c1f9a2abf7a1a1057c0c5a978913f6
      <Trendy />
    </View>
  );
}
