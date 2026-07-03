import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryGrid({ items }) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 20 },
  item: { alignItems: 'center', width: 60 },
  icon: { fontSize: 30, marginBottom: 5 },
  name: { color: 'white', fontSize: 12, fontWeight: '500' }
});