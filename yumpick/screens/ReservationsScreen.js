import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReservationCard from "../components/reservations/ReservationCard"; // Import the ReservationCard component
// import { Typography } from "../components/styles/typography";

export default function ReservationPage() {
  const reservationData = [
    {
      id: "1",
      restaurantName: "The Gourmet Grill",
      dateTime: "2024-12-08 18:00",
      guestNumber: 4,
      request: "Window seat",
      daysLeft: 5,
      image: require("../assets/home/restaurants/restaurant1.jpeg"),
    },
    {
      id: "2",
      restaurantName: "Pasta Paradise",
      dateTime: "2024-12-10 19:00",
      guestNumber: 2,
      request: "Vegetarian menu",
      daysLeft: 10,
      image: require("../assets/home/restaurants/restaurant2.jpeg"),
    },
    {
      id: "3",
      restaurantName: "Sushi Haven",
      dateTime: "2024-12-12 20:00",
      guestNumber: 3,
      request: "",
      daysLeft: 12,
      image: require("../assets/home/restaurants/restaurant3.jpeg"),
    },
    {
      id: "4",
      restaurantName: "Bistro Delight",
      dateTime: "2024-12-14 18:30",
      guestNumber: 5,
      request: "Anniversary celebration",
      daysLeft: 14,
      image: require("../assets/home/restaurants/restaurant4.jpeg"),
    },
  ];

  return (
      <View style={styles.options}>
        {/* <Text style={Typography.h1}>Upcoming</Text> */}
        <Text style={styles.line}>|</Text>
        {/* <Text style={[Typography.h1, { color: '#AAAAAA' }]}>Completed</Text>  */}
      <Text style={styles.line}>|</Text>
      {/* <Text style={[Typography.h1, { color: '#AAAAAA' }]}>Cancelled</Text>  */}

      {/* Rendering Reservation Cards */}
      {/* Loop through each reservation and pass data to ReservationCard */}
      {reservationData.map((item) => (
        <ReservationCard
          key={item.id}
          restaurantName={item.restaurantName}
          dateTime={item.dateTime}
          guestNumber={item.guestNumber}
          request={item.request}
          daysLeft={item.daysLeft}
          image={item.image} // Pass the image prop here
        />
      ))}
          </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  line: {
    fontSize: 18,
    textAlign: "center",
  },
  options: {
    flexDirection: "row", // Arrange the items horizontally
    justifyContent: "space-evenly", // Distribute space evenly
    marginBottom: 20,
  },
});
