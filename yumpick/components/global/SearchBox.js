import React from 'react';
import { TextInput, View } from 'react-native';
import tw from 'twrnc'; // Import twrnc for Tailwind CSS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { Colors } from '../styles/Colors'; // Import Colors to get the background color

export function SearchBox({ value, onChange }) {
  return (
    <View style={[tw`flex-row items-center rounded-full px-3 h-12 mx-2`, { backgroundColor: Colors.grayExtraLight }]}>
      <FontAwesomeIcon icon={faSearch} size={18} color={Colors.grayDark} style={tw`mx-2`} />
      <TextInput
        style={tw`flex-1 h-full`}
        placeholder="Search Places, Categories, or Items"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
