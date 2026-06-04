const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
 // res.send('Home Page!');
 res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
  //res.send('About Page!');
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
  //res.send('Contact Page!');
  res.sendFile(__dirname + '/contact.html');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});