/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static('dist'));

/* app.use(express.static(`${__dirname}/public`)); */

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// send the user to index html page inspite of the url
/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
}); */
app.listen(PORT, () => console.log(`Server is up running on ${PORT}`));
