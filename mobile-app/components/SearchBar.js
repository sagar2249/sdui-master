import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchBar({ placeholder }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Text style={styles.mic}>🎤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15, marginTop: -25, zIndex: 10 },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
  icon: { fontSize: 18, marginRight: 10 },
  placeholder: { flex: 1, color: '#888', fontSize: 15 },
  mic: { fontSize: 18, marginLeft: 10 },
});