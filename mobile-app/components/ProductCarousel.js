import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCarousel({ title, products, onProductSelect, onAddToCart }) {
  return (
    <View style={styles.container}>
      {/* Dynamic Section Title from Server */}
      <Text style={styles.sectionTitle}>{title}</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {products.map((item, index) => (
          /* Tapping the card itself opens the Product Details Page */
          <TouchableOpacity 
            key={index} 
            style={[styles.card, { backgroundColor: item.color || '#900C3F' }]}
            onPress={() => onProductSelect(item)}
          >
            <View style={styles.imagePlaceholder}>
               <Text style={styles.heart}>🤍</Text>
               <Text style={styles.boxEmoji}>📦</Text>
            </View>
            <View style={styles.tagRow}>
              <Text style={styles.tag}>{item.tag}</Text>
              {item.brand ? <Text style={styles.brandTag}>{item.brand}</Text> : null}
            </View>
            <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.discountText}>{item.discount}</Text>
            <View style={styles.priceRow}>
              <View>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              </View>
              
              {/* Tapping ADD adds it directly to your global cart state */}
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => onAddToCart(item)}
              >
                <Text style={styles.addText}>ADD</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 15, marginBottom: 8 },
  scroll: { paddingLeft: 15 },
  card: { width: 170, padding: 12, borderRadius: 12, marginRight: 15 },
  imagePlaceholder: { height: 120, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: 10, justifyContent: 'center', alignItems: 'center' },
  heart: { position: 'absolute', right: 10, top: 10, color: 'white', fontSize: 18 },
  boxEmoji: { fontSize: 40 },
  tagRow: { flexDirection: 'row', marginBottom: 5 },
  tag: { backgroundColor: '#333', color: 'white', fontSize: 10, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, fontWeight: 'bold', marginRight: 5 },
  brandTag: { backgroundColor: '#444', color: 'white', fontSize: 10, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, fontWeight: 'bold' },
  productName: { fontSize: 14, fontWeight: 'bold', color: 'white', height: 40, marginBottom: 5 },
  discountText: { color: '#FFD700', fontSize: 11, fontWeight: 'bold', marginBottom: 5 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  oldPrice: { fontSize: 11, color: '#ccc', textDecorationLine: 'line-through' },
  addButton: { borderColor: '#4CAF50', borderWidth: 1, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 8, backgroundColor: 'rgba(76, 175, 80, 0.4)' },
  addText: { color: '#4CAF50', fontWeight: 'bold', fontSize: 14 },
});