import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For the share icon
import tw from "twrnc"; // Import twrnc for Tailwind styling

const ReservationCard = ({
  restaurantName,
  dateTime,
  guestNumber,
  request,
  daysLeft,
  image,
}) => {
  return (
    <View style={tw`bg-white rounded-lg m-4 shadow-lg`}>
      {/* Image with Conditional Tag */}
      <View style={tw`relative`}>
        <Image source={image} style={tw`w-full h-36 rounded-t-lg`} />
        {daysLeft >= 1 && ( // Show only if the reservation is not in the past
          <View
            style={tw`absolute top-2 left-2 bg-red-500 rounded-md px-2 py-1`}
          >
            <Text style={tw`text-white text-xs font-bold`}>D-{daysLeft}</Text>
          </View>
        )}
      </View>

      {/* Content Area */}
      <View style={tw`p-4 flex-row items-center justify-between`}>
        {/* Details */}
        <View style={tw`flex-1`}>
          <Text style={tw`text-lg font-bold mb-1`}>{restaurantName}</Text>
          <Text style={tw`text-sm text-gray-500 mb-1`}>{dateTime}</Text>
          <Text style={tw`text-sm text-gray-500 mb-1`}>
            Guests: {guestNumber}
          </Text>
          <Text style={tw`text-sm text-gray-500`}>
            {request ? `Request: ${request}` : "Request: N/A"}
          </Text>
        </View>

        {/* Share Icon */}
        <TouchableOpacity style={tw`ml-4`}>
          <FontAwesome name="share-alt" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReservationCard;
