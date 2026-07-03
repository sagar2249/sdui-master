import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Notice the { title } up here! This is exactly what the server is sending.
export default function Banner({ title }) {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#4CAF50', // A nice solid green color
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3, // Adds a little drop shadow on Android
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});