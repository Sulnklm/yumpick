import React from "react";
import { ScrollView } from "react-native";
import { SearchBox } from "../components/global/SearchBox";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Trendy from "../components/home/Trendy";
import { Colors } from "../components/styles/Colors";
import Cities from "../components/home/Cities";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <SearchBox />
      <Banner />
      <Categories />
      <Cities />
      <Trendy navigation={navigation} />
    </ScrollView>
  );
}
