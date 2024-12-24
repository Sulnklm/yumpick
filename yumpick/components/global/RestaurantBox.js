import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc"; // Tailwind 스타일링 사용

export default function RestaurantBox({ restaurant, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={tw`p-4 border-b border-gray-200`}>
      {/* 메인 이미지 */}
      <Image
        source={restaurant.image}
        style={tw`w-full h-40 rounded-lg`}
        resizeMode="cover"
      />

      {/* 제목과 위치 */}
      <View style={tw`flex-row justify-between items-start`}>
        <Text style={tw`text-lg font-bold`}>{restaurant.title}</Text>
        <Text style={tw`text-sm text-gray-500`}>{restaurant.location}</Text>
      </View>

      {/* 카테고리와 평점 */}
      <View style={tw`flex-row items-center mt-1`}>
        <Text style={tw`text-sm text-gray-500`}>{restaurant.category}</Text>
        <Text style={tw`mx-2 text-sm text-gray-500`}>•</Text>
        <Text style={tw`text-sm text-yellow-500 font-bold`}>
          ★ {restaurant.rating} ({restaurant.reviews})
        </Text>
      </View>

      {/* 오픈 여부와 영업 시간 */}
      <View style={tw`flex-row items-center mt-2`}>
        <Text
          style={tw`text-sm ${
            restaurant.isOpen ? "text-green-500" : "text-red-500"
          }`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </Text>
        <Text style={tw`ml-2 text-sm text-gray-500`}>{restaurant.hours}</Text>
      </View>
    </TouchableOpacity>
  );
}
