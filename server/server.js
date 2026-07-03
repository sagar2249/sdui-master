const express = require('express');
const app = express();
const port = 3000;

// This is our API endpoint. It's like a drive-thru window.
app.get('/api/home', (req, res) => {
  // When someone drives up to '/api/home', we hand them this JSON data.
  res.json({
    components: [
      { type: 'BANNER', props: { title: 'Welcome to my SDUI App!' } },
      { type: 'SPACER', props: { height: 20 } },
      { type: 'BANNER', props: { title: 'This is controlled by the server.' } }
    ]
  });
});

// This tells the server to turn on and start listening for visitors.
app.listen(port, () => {
  console.log(`My server is alive at http://localhost:${port}`);
});