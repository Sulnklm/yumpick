import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import tw from "twrnc";
import { SearchBox } from "../components/global/SearchBox";

export default function BrowseScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://10.0.2.2:3900/api/posts")
      .then((response) => {
        setPosts(response.data); // Set the posts data
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);  // Log any error
      });
  }, []);

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <SearchBox />
      
      <ScrollView contentContainerStyle={tw`flex-wrap flex-row justify-between py-5`}>
        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            onPress={() => navigation.navigate("PostDetail", { postId: post.id })}
            style={tw`w-1/2 p-1.5`}  // 1/2 width to create two columns
          >
            <View style={tw`border border-gray-200 rounded-lg`}>
              <Image
                source={{ uri: post.image }}
                style={tw`w-full h-48 rounded-t-lg`}
              />
              <View style={tw`py-3 px-2`}>
                <Text style={tw`text-base font-semibold text-gray-800`}>
                  {post.title}
                </Text>
                <Text style={tw`text-xs text-gray-500 mt-1`}>
                  {post.category} - {post.location}
                </Text>
              </View>
              <View style={tw`p-2 bg-gray-100 rounded-b-lg items-end`}>
                <Text style={tw`text-xs text-gray-400`}>{post.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
