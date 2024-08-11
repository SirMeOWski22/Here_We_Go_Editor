const express = require('express');
const path = require('path'); // Add this line to require the path module

const app = express();
const PORT = process.env.PORT || 3000;

// Use path.join to correctly resolve the path to the dist directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve index.html for all routes that are not API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
