import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ text }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#D4AF37', marginHorizontal: 15, marginTop: 20, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  text: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});