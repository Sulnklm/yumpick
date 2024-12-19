import React from "react";
import { View, FlatList, Image } from "react-native";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Text } from '../styles/Text';
import { Colors } from "../styles/Colors";

const trendyData = [
  {
    id: "1",
    name: "The Gourmet Grill",
    image: require("../../assets/home/restaurants/restaurant1.jpeg"),
  },
  {
    id: "2",
    name: "Pasta Paradise",
    image: require("../../assets/home/restaurants/restaurant2.jpeg"),
  },
  {
    id: "3",
    name: "Trendy Item 3",
    image: require("../../assets/home/restaurants/restaurant3.jpeg"),
  },
  {
    id: "4",
    name: "Bistro Delight",
    image: require("../../assets/home/restaurants/restaurant4.jpeg"),
  },
];

export default function Trendy() {
  return (
    <View style={tw`pl-4`}>
      <View style={tw`flex-row items-center gap-3`}>
        <FontAwesomeIcon icon={faArrowTrendUp} size={23} color={Colors.grayDark}/>
        <Text style={tw`mb-2`} type="h1">Trendy</Text>
      </View>
      {/* For data list */}
      <FlatList
        data={trendyData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`mr-4 items-center`}>
            <Image source={item.image} style={tw`w-38 h-38 rounded-lg`} />
            {/* <Text style={styles.itemText}>{item.name}</Text> */}
            <Text style={tw`bg-black text-white mt-2`} >{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
