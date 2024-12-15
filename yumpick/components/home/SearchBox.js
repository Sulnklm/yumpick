import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { Typography } from '../styles/typography'; // Import Typography styles

export function SearchBox({ value, onChange }) {
  return (
    <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faSearch} size={20} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="What are you craving?"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: Typography.p.fontFamily, 
    fontSize: Typography.h2.fontSize,  
  },
});
