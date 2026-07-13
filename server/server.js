const express = require('express');
const app = express();
const port = 3000;

app.get('/api/home', (req, res) => {
  res.json({
    theme: { backgroundColor: '#120208', headerColor: '#D81B60', textColor: '#FFFFFF' },
    components: [
      { type: 'HEADER', props: { status: 'Store closed', location: 'HOME - Sagar, Bank of india...', balance: '₹0' } },
      { type: 'SEARCH_BAR', props: { placeholder: 'Search "milk", "rings", "chips"' } },
      { type: 'CATEGORY_GRID', props: { items: [
          {name: 'All', icon: '🛍️'}, {name: 'Winter', icon: '❄️'}, 
          {name: 'Electronics', icon: '🎧'}, {name: 'Beauty', icon: '💄'}, {name: 'Decor', icon: '🖥️'}
        ] } 
      },
      { type: 'THEME_BANNER', props: { title: "It's Propose Day!", subtitle: 'POWERED BY GIVA voylla', hasToggle: true } },
      
      // SHELF 1: Valentine Specials
      { type: 'PRODUCT_CAROUSEL', props: { 
          title: "Celebrate Valentine's 💖",
          products: [
            { id: 'v1', name: 'Voylla Jewellery Gift Box', price: '₹399', oldPrice: 'MRP ₹799', discount: '50% OFF', tag: '1 set', color: '#B33771', brand: 'GIVA', description: 'Exquisite handcrafted dynamic multi-color matching jewelry set perfect for a Valentine gift.' },
            { id: 'v2', name: 'Jewels Galaxy Ring', price: '₹279', oldPrice: 'MRP ₹799', discount: '65% OFF', tag: '1 pc', color: '#900C3F', brand: 'Galaxy', description: 'A gorgeous handcrafted silver finger ring beautifully wrapped in red silk padding.' }
          ]
        }
      },

      // SHELF 2: Snacks & Munchies
      { type: 'PRODUCT_CAROUSEL', props: { 
          title: "Snacks & Munchies 🍿",
          products: [
            { id: 's1', name: 'Lays Classic Salted Chips', price: '₹20', oldPrice: 'MRP : ₹20', discount: '0% OFF', tag: '50g', color: '#1E272C', brand: 'Lays', description: 'Crispy fried classic potato wafers with light sea salt seasoning.' },
            { id: 's2', name: 'Cadbury Silk Oreos', price: '₹80', oldPrice: 'MRP ₹90', discount: '11% OFF', tag: '1 pc', color: '#2C1E3D', brand: 'Cadbury', description: 'Rich smooth dairy milk chocolate embedded with crunchy bits of Oreo cookies.' }
          ]
        }
      },

      // SHELF 3: Fast Electronics
      { type: 'PRODUCT_CAROUSEL', props: { 
          title: "Electronics in 10 Mins 🎧",
          products: [
            { id: 'e1', name: 'Boat Rockerz Headphones', price: '1,299', oldPrice: 'MRP ₹2,999', discount: '56% OFF', tag: '1 unit', color: '#0F1C23', brand: 'boAt', description: 'Super bass wireless bluetooth over-ear headphones with 40-hour playback.' }
          ]
        }
      },

      { type: 'ACTION_BUTTON', props: { text: "See all Valentine's gifts ▸" } },
      { type: 'SPACER', props: { height: 100 } }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});