import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator, FlatList, TouchableOpacity, Linking } from "react-native";
import tw from "twrnc"; 

const ContentsGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Unsplash API 호출 함수
  const fetchFoodImages = async () => {
    const apiKey = "HtqJlFV2ZgRD2Fnu6bR9C3rDscF6hV14EsA5qXJ86BU"; 
    const url = `https://api.unsplash.com/search/photos?query=food&client_id=${apiKey}&per_page=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // 데이터 확인
      if (data && Array.isArray(data.results)) {
        setImages(data.results); // 음식 이미지 데이터 설정
      } else {
        console.error("No images found in the response.");
      }
      setLoading(false); // 로딩 완료
    } catch (error) {
      console.error("Error fetching Unsplash data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodImages();
  }, []);

  // 로딩 중일 때
  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={tw`bg-white rounded-lg shadow-sm m-1 flex-1`}>
      <Image
        source={{ uri: item.urls.small }}
        style={tw`w-full h-55 rounded-t-lg`}
      />
    </View>
  );

  return (
    <View style={tw`flex-1 p-4`}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2개의 열로 표시
        contentContainerStyle={tw`pb-4`} 
        columnWrapperStyle={tw`justify-between`} 
      />
    </View>
  );
};

export default ContentsGrid;
