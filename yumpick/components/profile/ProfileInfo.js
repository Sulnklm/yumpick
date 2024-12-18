import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Typography } from "../styles/Typography";

export default function ProfileInfo() {
  return (
    <View style={styles.container}>

      {/* User Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/home/restaurants/restaurant1.jpeg")}
          style={styles.profileImage}
        />
        <Text style={Typography.h1}>Suin</Text>
      </View>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={Typography.h2}>7</Text>
          <Text style={Typography.p}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={Typography.h2}>75</Text>
          <Text style={Typography.p}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={Typography.h2}>87</Text>
          <Text style={Typography.p}>Followers</Text>
        </View>
      </View>

      {/* User points */}
      <Text style={Typography.h2}>My Points</Text>
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
      </View>
      <Text style={Typography.p}>0 / 2000</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginVertical: 20,
  },
  statItem: {
    alignItems: "center",
  },
  pointsLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 10,
  },
  progress: {
    width: "20%",
    height: "100%",
    backgroundColor: "#8C52FF",
    borderRadius: 5,
  },
  pointsText: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});
