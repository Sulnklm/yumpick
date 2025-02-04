import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator, FlatList } from "react-native";
import tw from "twrnc"; 

const ContentsGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch food images from Unsplash API
  const fetchFoodImages = async () => {
    const apiKey = "HtqJlFV2ZgRD2Fnu6bR9C3rDscF6hV14EsA5qXJ86BU"; 
    const url = `https://api.unsplash.com/search/photos?query=food&client_id=${apiKey}&per_page=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && Array.isArray(data.results)) {
        setImages(data.results); // Set food images data
      } else {
        console.error("No images found.");
      }
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodImages(); // Fetch images when component mounts
  }, []);

  // Display loading indicator while images are being fetched
  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render each image in the grid
  const renderItem = ({ item }) => (
    <View style={tw`bg-white rounded-lg shadow-sm m-1 flex-1`}>
      <Image
        source={{ uri: item.urls.small }}
        style={tw`w-full h-55 rounded-t-lg`} // Adjust image size and style
      />
    </View>
  );

  return (
    <View style={tw`flex-1 p-4`}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display images in 2 columns
        contentContainerStyle={tw`pb-4`} 
        columnWrapperStyle={tw`justify-between`} 
      />
    </View>
  );
};

export default ContentsGrid;
