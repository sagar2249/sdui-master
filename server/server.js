const express = require('express');
const app = express();
const port = 3000;

// This is our API endpoint. It's like a drive-thru window.
// Inside server.js
app.get('/api/home', (req, res) => {
  res.json({
    components: [
      { type: 'BANNER', props: { title: '✈️ AI Travel Review Master' } },
      { type: 'SPACER', props: { height: 10 } },
      { type: 'BANNER', props: { title: 'New features and user-friendly updates coming soon!' } },
      { type: 'SPACER', props: { height: 30 } },
      { type: 'BANNER', props: { title: 'Please leave a destination review below.' } }
    ]
  });
});

// This tells the server to turn on and start listening for visitors.
app.listen(port, () => {
  console.log(`My server is alive at http://localhost:${port}`);
});