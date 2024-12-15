import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SearchBox() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/home/map.png')} 
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 380, 
      
    },
    image: {
      width: '100%',
      height: undefined,
      aspectRatio: 380 / 200,
      borderRadius: 10,  
      borderColor: '#ddd',
      borderWidth: 2,
    },
  });