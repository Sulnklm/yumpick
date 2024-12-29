import React from "react";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Text } from '../styles/Text';

const CircleButton = ({ onPress, label, imageSource }) => (
  <TouchableOpacity onPress={onPress} style={tw`items-center mx-2.5`}>
    <View
      style={tw`w-18 h-18 rounded-full overflow-hidden justify-center items-center relative`}
    >
      <Image
        source={imageSource}
        style={tw`w-full h-full`}
        resizeMode="cover"
      />
      <View
        style={tw`absolute inset-0 justify-center items-center bg-black bg-opacity-50`}
      >
        <Text style={tw`text-white text-center px-1.25`} type="caption">{label}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Cities = () => {
  const handlePress = (label) => {
    console.log(`${label} button pressed.`);
  };

  const buttons = [
    {
      key: "1",
      label: "Nearby",
      image: require("../../assets/home/cities/nearby.png"),
    },
    {
      key: "2",
      label: "Vancouver",
      image: require("../../assets/home/cities/vancouver.jpg"),
    },
    {
      key: "3",
      label: "Burnaby",
      image: require("../../assets/home/cities/burnaby.jpg"),
    },
    {
      key: "4",
      label: "Richmond",
      image: require("../../assets/home/cities/richmond.jpg"),
    },
    {
      key: "5",
      label: "Surrey",
      image: require("../../assets/home/cities/surrey.jpg"),
    },
    {
      key: "6",
      label: "Coquitlam",
      image: require("../../assets/home/cities/coquitlam.jpg"),
    },
  ];

  return (
    <View style={tw`px-5`}>
      {/* Divider */}
      <View style={tw`border-b border-gray-300 mb-4`} />

      {/* Section Title */}
      <Text style={tw`mb-2 ml-2`} type="h1">
        Where do you go?
      </Text>

      {/* Scrollable Buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`py-2`}
      >
        {buttons.map((button) => (
          <CircleButton
            key={button.key}
            onPress={() => handlePress(button.label)}
            label={button.label}
            imageSource={button.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cities;
