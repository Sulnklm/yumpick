import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import tw from "twrnc";

// Fetch post details based on postId passed through route params
export default function PostDetail({ route, navigation }) {
  const [post, setPost] = useState(null); 
  const { postId } = route.params; // Get postId from route params

  useEffect(() => {
    // Fetch post details by ID from the API
    axios.get(`http://10.0.2.2:3900/api/posts/${postId}`)
      .then((response) => {
        setPost(response.data); // Set post data in state
      })
      .catch((error) => {
        console.error("Error fetching post:", error); // Log any error
      });
  }, [postId]); // Dependency array to fetch when postId changes

  // If post data is not loaded yet, show a loading indicator
  if (!post) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-lg text-gray-600`}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Header with back button */}
      <View style={tw`absolute left-4 top-4 z-10`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`bg-gray-100 p-2 rounded-full`}>
          <Text style={tw`text-4xl text-gray-800 pb-1.5`}>←</Text>  {/* Back arrow */}
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.image }} style={tw`w-full h-72 rounded-lg shadow-lg mb-4`} />

      {/* Post Details */}
      <View style={tw`p-4`}>
        {/* Title Section */}
        <Text style={tw`text-3xl font-bold text-gray-800 mb-2`}>{post.title}</Text>

        {/* Category and Location */}
        <Text style={tw`text-base text-gray-500 mb-2`}>{post.category} - {post.location}</Text>

        {/* Date */}
        <Text style={tw`text-sm text-gray-400 mb-4`}>{post.date}</Text>

        {/* Post Content */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-lg text-gray-700`}>{post.content}</Text>
        </View>

        {/* Rating Section */}
        <View style={tw`mb-6 pt-6 border-t border-gray-200`}>
          <Text style={tw`text-xl font-semibold text-gray-800`}>Rating</Text>
          <Text style={tw`text-sm text-gray-600 mt-1`}>{post.rating} ({post.reviews} reviews)</Text>
        </View>

        {/* Closing Time */}
        <View style={tw`mb-6 pt-6 border-t border-gray-200`}>
          <Text style={tw`text-lg font-semibold text-gray-800`}>Closing Time</Text>
          <Text style={tw`text-lg text-gray-500`}>{post.closingTime}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
