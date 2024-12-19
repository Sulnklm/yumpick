import React from "react";
import { Text as RNText, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Typography } from "./Typography"; // Import Typography styles

export const Text = ({
  style,
  type = "p",  // Default to "p" if no type is provided
  ...props
}) => {
  const [fontsLoaded] = useFonts({
    "Afacad-Regular": require("../../assets/fonts/Afacad-Regular.ttf"),
    "Afacad-SemiBold": require("../../assets/fonts/Afacad-SemiBold.ttf"),
    "Afacad-Medium": require("../../assets/fonts/Afacad-Medium.ttf"),
    "Afacad-Bold": require("../../assets/fonts/Afacad-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // Get the correct typography style for the type (e.g., h1, h2, p, etc.)
  const typographyStyle = Typography[type] || Typography.p;

  return (
    <RNText
      style={[typographyStyle, style]} // Combine typographyStyle with any additional styles
      {...props}
    />
  );
};
