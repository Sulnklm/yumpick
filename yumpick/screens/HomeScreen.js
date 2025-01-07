import React from "react";
import { FlatList, View } from "react-native";
import { SearchBox } from "../components/global/SearchBox";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Trendy from "../components/home/Trendy";
import { Colors } from "../components/styles/Colors";
import Cities from "../components/home/Cities";

const DATA = ["SearchBox", "Banner", "Categories", "Cities", "Trendy"];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => {
    switch (item) {
      case "SearchBox":
        return <SearchBox />;
      case "Banner":
        return <Banner />;
      case "Categories":
        return <Categories navigation={navigation} />;
      case "Cities":
        return <Cities navigation={navigation} />;
      case "Trendy":
        return <Trendy navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={{ backgroundColor: Colors.background }}
    />
  );
}
