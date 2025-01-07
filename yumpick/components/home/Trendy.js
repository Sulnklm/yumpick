import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowTrendUp,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "../styles/Text";
import { Colors } from "../styles/Colors";
import RankBadge from "../global/RankBadge";

const trendyData = [
  {
    id: "1",
    name: "Black Anchor Steakhouse",
    location: "Vancouver",
    category: "Italian",
    rating: 4.9,
    reviews: 1038,
    isOpen: true,
    hours: "Closes 10 p.m.",
    image: require("../../assets/home/restaurants/restaurant1.jpeg"),
  },
  {
    id: "2",
    name: "Seoul Gogi",
    location: "Coquitlam",
    category: "Korean",
    rating: 4.9,
    reviews: 982,
    isOpen: true,
    hours: "Closes 11 p.m.",
    image: require("../../assets/home/restaurants/restaurant2.jpeg"),
  },
  {
    id: "3",
    name: "The Croissant Craze",
    location: "Burnaby",
    category: "Dessert",
    rating: 4.9,
    reviews: 524,
    isOpen: true,
    hours: "Closes 7 p.m.",
    image: require("../../assets/home/restaurants/restaurant3.jpeg"),
  },
];

export default function Trendy({ navigation }) {
  return (
    <View style={tw`px-5`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <View style={tw`flex-row items-center gap-3`}>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            size={23}
            color={Colors.grayDark}
          />
          <Text type="h1">Trendy</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("TrendySeeAll")}>
          <Text>See All </Text>
        </TouchableOpacity>
      </View>

      {/* FlatList */}
      <FlatList
        data={trendyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={tw`flex-row gap-4 mb-4 relative`}>
            {/* Image */}
            <View>
              <Image source={item.image} style={tw`w-20 h-20 rounded-lg`} />
              <RankBadge rank={index + 1} /> {/* RankBadge 컴포넌트 사용 */}
            </View>

            {/* Details */}
            <View style={tw`flex-1`}>
              {/* Name */}
              <Text style={tw`mb-1`} type="h2">
                {item.name}
              </Text>

              {/* Location, Category, Rating */}
              <View style={tw`flex-row items-center mb-1`}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={12}
                  color={Colors.grayDark}
                />
                <Text style={tw`mx-1`}>
                  {item.location} • {item.category} •
                </Text>
                <FontAwesomeIcon icon={faStar} size={12} color="gold" />
                <Text style={tw`text-yellow-500`}>
                  {item.rating} ({item.reviews})
                </Text>
              </View>

              {/* Open/Close Status */}
              <View style={tw`flex-row items-center`}>
                <Text
                  style={tw`${
                    item.isOpen ? "text-[#FF434F]" : "text-[#757575]"
                  }`}
                >
                  {item.isOpen ? "Open" : "Closed"}
                </Text>
                <Text style={tw`ml-1`}>• {item.hours}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
