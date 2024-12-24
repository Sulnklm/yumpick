import React from "react";
import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Text } from "../styles/Text"; // Custom Text Component
import tw from "twrnc";
import { Colors } from "../styles/Colors";

// JSON 데이터
const banner = require("../../assets/data/home.json");

// 이미지 매핑
const imageMapping = {
  "banner1.png": require("../../assets/home/banner/banner1.png"),
  "banner2.png": require("../../assets/home/banner/banner2.png"),
  "banner3.png": require("../../assets/home/banner/banner3.png"),
};

// 슬라이더의 카드 너비 및 화면 크기 계산
const { width: screenWidth } = Dimensions.get("window");

export default function Banner() {
  const renderItem = ({ item }) => (
    <View
      style={tw`h-47 w-90 items-center justify-center rounded-lg shadow-lg mt-5`} 
    >
      <Image
        source={imageMapping[item.image]}
        style={tw`relative w-full h-full rounded-lg`}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <Carousel
      data={banner.banner} // 슬라이더에 사용할 데이터
      renderItem={renderItem} // 각 카드 렌더링
      sliderWidth={screenWidth} // 전체 슬라이더의 너비
      itemWidth={screenWidth * 0.87} // 각 카드의 너비
      //   loop={true} // 무한 슬라이더
      autoplay={true} // 자동 재생
      autoplayInterval={3000} // 슬라이드 간 간격
      //   enableMomentum={true} // 부드러운 전환
      //   decelerationRate="fast" // 빠르게 스와이프 설정
      //   loopClonesPerSide={banner.banner.length} // 충분한 복제 슬라이드 설정
    />
  );
}
