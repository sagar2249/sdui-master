const express = require('express');
const app = express();
const port = 3000;

app.get('/api/home', (req, res) => {
  res.json({
    theme: { backgroundColor: '#120208', headerColor: '#D81B60', textColor: '#FFFFFF' },
    components: [
      { type: 'HEADER', props: { status: 'Store closed', location: 'HOME - Sagar, Bank of india...', balance: '₹0' } },
      { type: 'SEARCH_BAR', props: { placeholder: 'Search "couple rings"' } },
      { type: 'CATEGORY_GRID', props: { items: [
          {name: 'All', icon: '🛍️'}, {name: 'Winter', icon: '❄️'}, 
          {name: 'Electronics', icon: '🎧'}, {name: 'Beauty', icon: '💄'}, {name: 'Decor', icon: '🖥️'}
        ] } 
      },
      { type: 'THEME_BANNER', props: { title: "It's Propose Day!", subtitle: 'POWERED BY GIVA voylla', hasToggle: true } },
      { type: 'PRODUCT_CAROUSEL', props: { products: [
          { name: 'Voylla Jewellery Gift Box (Multicolour)', price: '₹399', oldPrice: 'MRP ₹799', discount: '50% OFF', tag: '1 set', color: '#B33771', brand: 'No Plating' },
          { name: 'Jewels Galaxy Handcrafted Finger...', price: '₹279', oldPrice: 'MRP ₹799', discount: '65% OFF', tag: '1 pc', color: '#900C3F', brand: '' }
        ]
      }},
      { type: 'ACTION_BUTTON', props: { text: "See all Valentine's gifts ▸" } },
      { type: 'SPACER', props: { height: 100 } } // Extra space so we can scroll past the bottom nav
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});