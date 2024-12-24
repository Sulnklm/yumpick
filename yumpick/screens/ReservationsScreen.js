import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ReservationCard from "../components/reservations/ReservationCard";
import tw from "twrnc";

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Completed", "Cancelled"]; // Define tabs

  const reservationData = [
    {
      id: "1",
      restaurantName: "The Gourmet Grill",
      dateTime: "2024-12-08 18:00",
      guestNumber: 4,
      request: "Window seat",
      daysLeft: 5,
      image: require("../assets/home/restaurants/restaurant1.jpeg"),
      status: "Upcoming",
    },
    {
      id: "2",
      restaurantName: "Pasta Paradise",
      dateTime: "2024-12-10 19:00",
      guestNumber: 2,
      request: "Vegetarian menu",
      daysLeft: 0,
      image: require("../assets/home/restaurants/restaurant2.jpeg"),
      status: "Completed",
    },
    {
      id: "3",
      restaurantName: "Sushi Haven",
      dateTime: "2024-12-12 20:00",
      guestNumber: 3,
      request: "",
      daysLeft: -1,
      image: require("../assets/home/restaurants/restaurant3.jpeg"),
      status: "Completed",
    },
    {
      id: "4",
      restaurantName: "Bistro Delight",
      dateTime: "2024-12-14 18:30",
      guestNumber: 5,
      request: "Anniversary celebration",
      daysLeft: 14,
      image: require("../assets/home/restaurants/restaurant4.jpeg"),
      status: "Upcoming",
    },
  ];

  const filteredReservations = reservationData.filter(
    (item) => item.status === activeTab
  );

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Header Section */}
      <View
        style={tw`flex-row justify-around bg-white py-4 border-b border-gray-200`}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={tw`flex-row items-center`}
          >
            <Text
              style={tw.style(
                `text-base px-2`,
                activeTab === tab ? "font-bold text-black" : "text-gray-400"
              )}
            >
              {tab}
            </Text>
            {tab !== tabs[tabs.length - 1] && (
              <Text style={tw`text-gray-300`}>|</Text>
            )}
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
