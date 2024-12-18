// src/components/Text.js
import React from 'react';
import { Text as RNText, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc'; // Import twrnc for tailwind styles
import { Colors } from '../styles/Colors'; // Import Colors

export const Text = ({ style, weight, color = Colors.grayDark, ...props }) => {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../../assets/fonts/Afacad-Regular.ttf'),
    'Afacad-SemiBold': require('../../assets/fonts/Afacad-SemiBold.ttf'),
    'Afacad-Medium': require('../../assets/fonts/Afacad-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // Determine the font weight
  const fontFamily = weight === 'semibold' ? 'Afacad-SemiBold' : weight === 'medium' ? 'Afacad-Medium' : 'Afacad-Regular';

  return (
    <RNText style={[tw.style(`text-[${color}]`), { fontFamily }, style]} {...props} />
  );
};
