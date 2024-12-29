import React from 'react';
import { TextInput, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '../styles/Typography';
import { Colors } from '../styles/Colors';
import tw from 'twrnc';

export function SearchBox({ value, onChange }) {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../../assets/fonts/Afacad-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={[tw`flex-row mt-15 items-center rounded-full px-3 h-12 mx-2`, { backgroundColor: Colors.grayExtraLight }]}>
      <FontAwesomeIcon icon={faSearch} size={18} color={Colors.grayDark} style={tw`mx-2`} />
      <TextInput
        style={[
          tw`flex-1 h-full`,
          Typography.p, 
        ]}
        placeholder="Search Places, Categories, or Items"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
