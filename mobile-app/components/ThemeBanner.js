import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ThemeBanner({ title, subtitle, bgColor }) {
  return (
    <View style={[styles.banner, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    margin: 15,
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  subtitle: { fontSize: 16, color: 'white', marginTop: 5 },
});