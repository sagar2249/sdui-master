import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ status, location, balance, themeConfig }) {
  return (
    <View style={[styles.container, { backgroundColor: themeConfig.headerColor }]}>
      <Text style={styles.time}>2:24</Text>
      <Text style={styles.subText}>Please come back at 6:00 am</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.location}>{location} ▾</Text>
      
      <View style={styles.profileSection}>
        <View style={styles.wallet}>
          <Text style={styles.walletIcon}>💸</Text>
          <Text style={styles.walletText}>{balance}</Text>
        </View>
        <View style={styles.profileIcon}><Text style={styles.profileText}>👤</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50, paddingBottom: 35 },
  time: { color: 'white', position: 'absolute', top: 15, left: 20, fontWeight: 'bold' },
  subText: { color: 'white', fontSize: 12, fontWeight: '600' },
  status: { color: 'white', fontSize: 32, fontWeight: '900', marginTop: 5 },
  location: { color: 'white', fontSize: 14, fontWeight: 'bold', marginTop: 5 },
  profileSection: { position: 'absolute', right: 20, top: 60, flexDirection: 'row', alignItems: 'center' },
  wallet: { backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10, alignItems: 'center' },
  walletIcon: { fontSize: 16 },
  walletText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  profileIcon: { backgroundColor: 'rgba(255,255,255,0.2)', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  profileText: { color: 'white', fontSize: 20 }
});