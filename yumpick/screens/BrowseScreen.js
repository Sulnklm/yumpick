import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import axios from "axios";
import tw from "twrnc";
import { SearchBox } from "../components/global/SearchBox";

export default function BrowseScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://localhost:3900/api/posts")
      .then((response) => {
        setPosts(response.data); // Set the posts data
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <SearchBox />
      <ScrollView contentContainerStyle={tw`flex-row flex-wrap justify-between`}>
        {posts.map((post) => (
          <View key={post.id} style={tw`w-48 mb-4 rounded-lg overflow-hidden`}>
            <Image source={{ uri: post.image }} style={tw`w-full h-36 rounded-lg`} />
            <Text style={tw`text-center font-bold mt-2`}>{post.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
