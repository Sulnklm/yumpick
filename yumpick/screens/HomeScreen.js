import { StyleSheet, View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image style={styles.titleImage} source={require('../assets/lab-assets/bcit3295.png')} />

      <Text style={styles.heading}>Week 9 Example 1</Text>

      <Text>This will be a navigator with tabs example.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  heading: {
    color: '#0000cc',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  titleImage: {
    aspectRatio: 1,
    height: 400,
    width: '100%'
  },
});