import React from 'react';
import { Text as RNText, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import { Colors } from './Colors';
import { Typography } from './Typography'; // Import Typography styles

export const Text = ({ style, type = 'p', weight, color = Colors.grayDark, ...props }) => {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('../../assets/fonts/Afacad-Regular.ttf'),
    'Afacad-SemiBold': require('../../assets/fonts/Afacad-SemiBold.ttf'),
    'Afacad-Medium': require('../../assets/fonts/Afacad-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // Determine the font family based on the weight
  const fontFamily =
    weight === 'semibold'
      ? 'Afacad-SemiBold'
      : weight === 'medium'
      ? 'Afacad-Medium'
      : 'Afacad-Regular';

  // Map the type to Typography styles
  const typographyStyle = Typography[type] || Typography.p;

  return (
    <RNText
      style={[tw.style(typographyStyle), { fontFamily, color }, style]}
      {...props}
    />
  );
};
