import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// 1. We import the beautiful components we just made!
import Banner from './components/Banner';
import Spacer from './components/Spacer';

// --- CONFIGURATION ---
// PUT YOUR IP ADDRESS BACK HERE (Keep the :3000/api/home)
const SERVER_URL = 'http://192.168.2.207:3000/api/home';

// 2. THE DICTIONARY (The most important part of SDUI)
// This maps the text from the server to our actual visual files.
const componentDictionary = {
  'BANNER': Banner,
  'SPACER': Spacer,
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [components, setComponents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        setComponents(data.components);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not connect to the server.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Fetching layout from server...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>❌ Connection Error</Text>
      </View>
    );
  }

  // 3. THE MAGIC RENDERER
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Server-Driven UI</Text>
      
      {components.map((item, index) => {
        // Look up the word from the server in our dictionary
        const ComponentToRender = componentDictionary[item.type];

        // If it exists in our dictionary, draw it!
        // The {...item.props} takes everything the server sent (like the title) and hands it to the component.
        if (ComponentToRender) {
          return <ComponentToRender key={index} {...item.props} />;
        }

        // 4. THE FALLBACK
        // If the server sends a new word we don't know yet, don't crash! Show a warning.
        return (
          <View key={index} style={styles.unknownBox}>
            <Text style={styles.unknownText}>Unknown Component: {item.type}</Text>
          </View>
        );
      })}
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
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  unknownBox: {
    backgroundColor: '#ffebee',
    padding: 10,
    borderWidth: 1,
    borderColor: '#f44336',
    borderRadius: 5,
    marginBottom: 10,
  },
  unknownText: {
    color: '#f44336',
    fontWeight: 'bold',
  },
});