import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, subtitle, themeConfig }) {
  return (
    <View style={[styles.container, { backgroundColor: themeConfig.headerColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  subtitle: { fontSize: 14, color: 'white', marginTop: 5 },
});