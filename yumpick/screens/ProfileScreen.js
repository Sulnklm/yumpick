import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileInfo from '../components/profile/ProfileInfo';  // Import the ProfileInfo component
import ProfileTabs from '../components/profile/ProfileTabs';  // Import the ProfileTabs component

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* <ProfileInfo />  
      <ProfileTabs />   */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
  },
});
