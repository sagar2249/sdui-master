import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';

// Import our components
import Spacer from './components/Spacer';
import Header from './components/Header';
import ThemeBanner from './components/ThemeBanner';
import SearchBar from './components/SearchBar';           // <-- ADD THIS
import ProductCarousel from './components/ProductCarousel'; // <-- ADD THIS

const SERVER_URL = 'http://192.168.2.207:3000/api/home';

// Our updated Dictionary
const componentDictionary = {
  'SPACER': Spacer,
  'HEADER': Header,
  'THEME_BANNER': ThemeBanner,
  'SEARCH_BAR': SearchBar,             // <-- ADD THIS
  'PRODUCT_CAROUSEL': ProductCarousel, // <-- ADD THIS
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null); // Now holds both theme AND components

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        setPageData(data); // Save the whole JSON object
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // The server now controls the background color of the whole app!
  return (
    <ScrollView style={{ flex: 1, backgroundColor: pageData.theme.backgroundColor }}>
      
      {pageData.components.map((item, index) => {
        const ComponentToRender = componentDictionary[item.type];

        if (ComponentToRender) {
          // We pass down the specific props AND the overall themeConfig so components know what colors to use
          return <ComponentToRender key={index} {...item.props} themeConfig={pageData.theme} />;
        }

        // Fallback for unknown components (like our PRODUCT_CAROUSEL for now)
        return (
          <View key={index} style={styles.unknownBox}>
            <Text style={styles.unknownText}>Coming Soon: {item.type}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  unknownBox: { margin: 15, padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
  unknownText: { color: '#555', fontWeight: 'bold' }
});