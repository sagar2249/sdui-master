import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

// Import our existing homepage components
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import ThemeBanner from './components/ThemeBanner';
import ProductCarousel from './components/ProductCarousel';
import ActionButton from './components/ActionButton';
import Spacer from './components/Spacer';

// CONFIGURATION
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
  
  // --- NEW GLOBAL STATE FOR OUR FLOW ---
  const [currentScreen, setCurrentScreen] = useState('HOME'); // HOME, DETAILS, CHECKOUT, TRACKING
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Helper function to add items to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (loading || !pageData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#120208' }}>
        <ActivityIndicator size="large" color="#D81B60" />
      </View>
    );
  }

  // --- SCREEN RENDERER ---
  return (
    <View style={{ flex: 1, backgroundColor: pageData.theme.backgroundColor }}>
      <StatusBar barStyle="light-content" backgroundColor={pageData.theme.headerColor} />
      
      {currentScreen === 'HOME' && (
        <ScrollView style={{ flex: 1 }}>
          {pageData.components.map((item, index) => {
            const ComponentToRender = componentDictionary[item.type];
            if (ComponentToRender) {
              // We pass addToCart and navigation handlers down to our components
              return (
                <ComponentToRender 
                  key={index} 
                  {...item.props} 
                  themeConfig={pageData.theme} 
                  onProductSelect={(prod) => {
                    setSelectedProduct(prod);
                    setCurrentScreen('DETAILS');
                  }}
                  onAddToCart={addToCart}
                />
              );
            }
            return null;
          })}
        </ScrollView>
      )}

      {currentScreen === 'DETAILS' && (
        <View style={styles.centerScreen}>
          <Text style={{ color: 'white', fontSize: 20 }}>📦 Product Details Screen (Coming Next)</Text>
          <Text style={{ color: 'gray', marginTop: 10 }}>{selectedProduct?.name}</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => setCurrentScreen('HOME')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back Home</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentScreen === 'CHECKOUT' && (
        <View style={styles.centerScreen}>
          <Text style={{ color: 'white', fontSize: 20 }}>💳 Checkout Screen (Coming Soon)</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => setCurrentScreen('HOME')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back Home</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentScreen === 'TRACKING' && (
        <View style={styles.centerScreen}>
          <Text style={{ color: 'white', fontSize: 20 }}>🚴‍♂️ Live Order Tracking Screen (Coming Soon)</Text>
        </View>
      )}

      {/* FIXED BOTTOM NAVIGATION BAR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('HOME')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('CHECKOUT')}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  backBtn: { backgroundColor: '#D81B60', padding: 12, borderRadius: 8, marginTop: 20 },
  bottomNav: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 70,
    backgroundColor: '#1C1C1C', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    borderTopWidth: 1, borderColor: '#333',
  },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 24, marginBottom: 2 },
  navText: { color: 'white', fontSize: 10, fontWeight: '600' }
});