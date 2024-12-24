import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import tw from "twrnc";

export default function RankBadge({ rank }) {
  return (
    <View
      style={[
        tw`absolute top-0 left-0`,
        styles.container,
        { transform: [{ translateX: 6}, { translateY: -3 } ]  }, // translateX 적용
      ]}
    >
      {/* 배지 배경 이미지 */}
      <Image
        source={require("../../assets/global/rank-badge-red.png")} // 배지 이미지 경로
        style={styles.badgeImage}
        resizeMode="contain"
      />
      {/* 중앙의 숫자 */}
      <Text style={styles.rankText}>{rank}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24, // 배지의 크기
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // 이미지가 배경으로 위치
  },
  rankText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
