import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCarousel({ title, products }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {products.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageEmoji}>📦</Text>
            </View>
            <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
            <View style={styles.priceRow}>
              <View>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 10, paddingBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 10, color: '#333' },
  scroll: { paddingLeft: 15 },
  card: {
    backgroundColor: 'white',
    width: 140,
    padding: 10,
    borderRadius: 12,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    elevation: 2,
  },
  imagePlaceholder: { backgroundColor: '#F8F8F8', height: 100, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  imageEmoji: { fontSize: 40 },
  productName: { fontSize: 13, fontWeight: '500', color: '#333', height: 35 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  price: { fontSize: 14, fontWeight: 'bold' },
  oldPrice: { fontSize: 11, color: '#888', textDecorationLine: 'line-through' },
  addButton: { borderColor: '#318616', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 12, borderRadius: 6, backgroundColor: '#F4F9F2' },
  addText: { color: '#318616', fontWeight: 'bold', fontSize: 12 },
});