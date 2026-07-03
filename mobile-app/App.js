import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, StatusBar } from 'react-native';

// Import all our custom components
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import ThemeBanner from './components/ThemeBanner';
import ProductCarousel from './components/ProductCarousel';
import ActionButton from './components/ActionButton';
import Spacer from './components/Spacer';

const SERVER_URL = 'http://192.168.2.207:3000/api/home';

const componentDictionary = {
  'HEADER': Header,
  'SEARCH_BAR': SearchBar,
  'CATEGORY_GRID': CategoryGrid,
  'THEME_BANNER': ThemeBanner,
  'PRODUCT_CAROUSEL': ProductCarousel,
  'ACTION_BUTTON': ActionButton,
  'SPACER': Spacer,
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#120208' }}>
        <ActivityIndicator size="large" color="#D81B60" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: pageData.theme.backgroundColor }}>
      <StatusBar barStyle="light-content" backgroundColor={pageData.theme.headerColor} />
      
      <ScrollView style={{ flex: 1 }}>
        {pageData.components.map((item, index) => {
          const ComponentToRender = componentDictionary[item.type];
          if (ComponentToRender) {
            return <ComponentToRender key={index} {...item.props} themeConfig={pageData.theme} />;
          }
          return null;
        })}
      </ScrollView>

      {/* FIXED BOTTOM NAVIGATION BAR */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}><Text style={styles.navIcon}>🏠</Text><Text style={styles.navText}>Home</Text></View>
        <View style={styles.navItem}><Text style={styles.navIcon}>🛍️</Text><Text style={styles.navText}>Order Again</Text></View>
        <View style={styles.navItem}><Text style={styles.navIcon}>🗂️</Text><Text style={styles.navText}>Categories</Text></View>
        <View style={styles.navItem}><Text style={styles.navIcon}>🖨️</Text><Text style={styles.navText}>Print</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#1C1C1C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 24, marginBottom: 2 },
  navText: { color: 'white', fontSize: 10, fontWeight: '600' }
});