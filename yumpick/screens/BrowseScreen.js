import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import axios from "axios";
import tw from "twrnc";
import { SearchBox } from "../components/global/SearchBox";

export default function BrowseScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://10.0.2.2:3900/api/posts")  // Updated API path
      .then((response) => {
        setPosts(response.data); // Set the posts data in the state
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);  // Log any error
      });
  }, []);

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {/* Search box component */}
      <SearchBox />
      
      {/* ScrollView to display the posts in a grid layout */}
      <ScrollView contentContainerStyle={tw`flex-row flex-wrap mt-5`}>
        {posts.map((post) => (
          <View key={post.id} style={tw`w-1/2 p-2 mb-4 border border-gray-200 rounded-lg`}> 
            {/* Each post will be displayed in a 2-column grid */}
            
            {/* Image of the restaurant */}
            <Image source={{ uri: post.image }} style={tw`w-full h-48 rounded-lg`} />
            
            {/* Post content */}
            <View style={tw`py-3`}>
              {/* Post title */}
              <Text style={tw`text-lg font-semibold text-gray-800`}>{post.title}</Text>

              {/* Category and location of the restaurant */}
              <Text style={tw`text-sm text-gray-500 mt-1`}>{post.category} - {post.location}</Text>
            </View>

            {/* Date of the post */}
            <View style={tw`p-3 bg-gray-100 rounded-b-lg items-end`}>
              <Text style={tw`text-xs text-gray-400`}>{post.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
