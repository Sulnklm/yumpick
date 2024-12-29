import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Text } from "../styles/Text";
import { Colors } from "../styles/Colors";
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
    <View style={tw`bg-white rounded-lg px-5`}>
      {/* Image with Conditional Tag */}
      <View style={tw`flex-row`}>
        <Image
          source={image}
          style={tw`w-full w-30 h-30 rounded-t-lg rounded-md mr-3`}
        />

        {/* Details */}
        <View style={tw`flex-1`}>
          <View style={tw`flex-row justify-between items-center`}>
            {daysLeft >= 1 && ( // Show only if the reservation is not in the past
              <View
                style={[
                  tw`rounded-md px-2= py-0.3 mb-0.5`,
                  { backgroundColor: Colors.primaryRed },
                ]}
              >
                <Text style={tw`text-white text-center`}>D-{daysLeft}</Text>
              </View>
            )}
            {/* Share Icon */}
            {daysLeft && (
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                size={15}
                color={Colors.grayDark}
                style={[tw`justify-self-end pr-10`]}
              />
            )}
          </View>
          <Text style={tw`mb-1`} type="h2">
            {restaurantName}
          </Text>
          <Text style={tw`mb-0.5`}>{dateTime}</Text>
          <Text style={tw`mb-0.5`}>Guests: {guestNumber}</Text>
          <Text style={tw`mb-1 text-sm text-gray-500`}>
            {request ? `Request: ${request}` : "Request: N/A"}
          </Text>
          {
            (daysLeft == 0 && ( // Show only if the reservation is not in the past
              <Text style={tw`underline`}>Add a Review</Text>
            ))
          }
        </View>
      </View>
      <View style={tw`border-b border-gray-300 my-4`} />
    </View>
  );
};

export default ReservationCard;
