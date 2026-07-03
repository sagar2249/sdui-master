const express = require('express');
const app = express();
const port = 3000;

// This is our magic switch! 
// Change this to true or false, restart the server, and watch the app change instantly.
const isIndependenceDay = true; 

app.get('/api/home', (req, res) => {
  const isOccasion = false; // Set to false for standard Blinkit look!

  const theme = isOccasion 
    ? { backgroundColor: '#FDF2F8', headerColor: '#EC4899', textColor: '#831843' } // Pink Valentine Theme
    : { backgroundColor: '#F4F6F8', headerColor: '#F3C536', textColor: '#000000' }; // Standard Blinkit Yellow

  const components = isOccasion
    ? [
        { type: 'HEADER', props: { title: 'HOME - Sagar', subtitle: 'Delivery in 8 mins' } },
        { type: 'SEARCH_BAR', props: { placeholder: 'Search "couple rings"' } },
        { type: 'THEME_BANNER', props: { title: 'It\'s Propose Day! 💍', subtitle: 'Gifts, Chocolates & Flowers', bgColor: '#DB2777' } },
        { type: 'PRODUCT_CAROUSEL', props: { title: 'Valentine Gifts', products: [{ name: 'Red Roses', price: '₹299', oldPrice: '₹499' }, { name: 'Dairy Milk Silk', price: '₹175', oldPrice: '₹199' }] } }
      ]
    : [
        { type: 'HEADER', props: { title: 'HOME - Sagar', subtitle: 'Delivery in 10 mins' } },
        { type: 'SEARCH_BAR', props: { placeholder: 'Search "milk", "bread", "sweets"' } },
        { type: 'THEME_BANNER', props: { title: 'Groceries in minutes', subtitle: 'Fresh vegetables & daily needs', bgColor: '#E8F3D6', textColor: '#2D5A27' } },
        { type: 'PRODUCT_CAROUSEL', props: { title: 'Dairy & Breakfast', products: [{ name: 'Amul Milk', price: '₹66', oldPrice: '₹68' }, { name: 'Britannia Bread', price: '₹50', oldPrice: '₹55' }, { name: 'Eggs (6 pcs)', price: '₹45', oldPrice: '₹50' }] } }
      ];

  res.json({ theme, components });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});