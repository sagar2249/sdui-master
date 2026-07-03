import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ThemeBanner({ title, subtitle, hasToggle }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {hasToggle && (
        <View style={styles.toggleBtn}>
          <Text style={styles.toggleText}>SINGLE MODE</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 25, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: '900', color: 'white' },
  subtitle: { fontSize: 12, color: '#ddd', marginTop: 2, letterSpacing: 1 },
  toggleBtn: { backgroundColor: '#111', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#444' },
  toggleText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});