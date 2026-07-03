import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// --- CONFIGURATION ---
// REPLACE THE NUMBER BELOW WITH YOUR EXACT IP ADDRESS
const SERVER_URL = 'http://192.168.2.207:3000/api/home';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [components, setComponents] = useState([]);
  const [error, setError] = useState(null);

  // This function runs automatically when the app opens up
  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        // The server sent us the array! Let's save it.
        setComponents(data.components);
        setLoading(false);
      })
      .catch((err) => {
        // If something goes wrong, log the error so we can fix it
        console.error(err);
        setError('Could not connect to the server.');
        setLoading(false);
      });
  }, []);

  // 1. If the data is still loading over the hotspot, show a loading spinner
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Fetching layout from server...</Text>
      </View>
    );
  }

  // 2. If the connection failed, show an error screen
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>❌ Connection Error</Text>
        <Text>Make sure your server terminal is turned on!</Text>
      </View>
    );
  }

  // 3. If we successfully fetched the data, let's see what the server sent us!
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SDUI Dynamic Inspector</Text>
      
      {components.map((item, index) => (
        <View key={index} style={styles.rawBox}>
          <Text style={styles.typeText}>Component Type: {item.type}</Text>
          <Text>Props: {JSON.stringify(item.props)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  rawBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  typeText: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
});