import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import ReservationCard from "../components/reservations/ReservationCard";
import tw from "twrnc";
import { Text } from "../components/styles/Text";
import { Typography } from "../components/styles/Typography";
import { Colors } from "../components/styles/Colors";

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Completed", "Cancelled"];

  const reservationData = [
    {
      id: "1",
      restaurantName: "The Gourmet Grill",
      dateTime: "December 25, 2024 • 6:00 pm",
      guestNumber: "3 • Dining room",
      request: "Window seat",
      daysLeft: 5,
      image: require("../assets/home/restaurants/restaurant1.jpeg"),
      status: "Upcoming",
    },
    {
      id: "2",
      restaurantName: "Pasta Paradise",
      dateTime: "December 18, 2024 • 6:00 pm",
      guestNumber: "2 • Standard seat",
      request: "Vegetarian menu",
      daysLeft: 0,
      image: require("../assets/home/restaurants/restaurant2.jpeg"),
      status: "Completed",
    },
    {
      id: "3",
      restaurantName: "Sushi Haven",
      dateTime: "December 12, 2024 • 6:30 pm",
      guestNumber: "3 • Dining room",
      request: "",
      daysLeft: 0,
      image: require("../assets/home/restaurants/restaurant3.jpeg"),
      status: "Completed",
    },
    {
      id: "4",
      restaurantName: "Bistro Delight",
      dateTime: "December 27, 2024 • 6:30 pm",
      guestNumber: 5,
      request: "Anniversary celebration",
      daysLeft: 7,
      image: require("../assets/home/restaurants/restaurant4.jpeg"),
      status: "Upcoming",
    },
  ];

  const filteredReservations = reservationData.filter(
    (item) => item.status === activeTab
  );

  return (
    <View style={tw`flex-1 bg-white pt-15`}>
      {/* Header Section */}
      <View
        style={tw`flex-row justify-around bg-white py-2 pb-10`}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={tw`flex-row`}
          >
            <Text
              style={[
                Typography.h2,
                tw.style(activeTab === tab ? "text-gray-800" : "text-gray-300"), // Tailwind 조건부 적용
              ]}
            >
              {tab}
            </Text>
            {/* {tab !== tabs[tabs.length - 1] && (
              <Text style={tw`text-gray-300 items-center`}>|</Text>
            )} */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Reservations Section */}
      <ScrollView>
        {filteredReservations.length > 0 ? (
          filteredReservations.map((item) => (
            <ReservationCard
              key={item.id}
              restaurantName={item.restaurantName}
              dateTime={item.dateTime}
              guestNumber={item.guestNumber}
              request={item.request}
              daysLeft={item.daysLeft}
              image={item.image}
            />
          ))
        ) : (
          <View style={tw`mt-5 items-center`}></View>
        )}
      </ScrollView>
    </View>
  );
}
