const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

const userdata = {
  username: 'anurag',
  password: 'kashyap',
  email: 'anu@gmail.com',
  phone: '1234567890',
  address: 'Mumbai, India',
  age: 35,
}

const jokes = [
  { id: 1, title: 'Why did the scarecrow win an award?', joke: 'Because he was outstanding in his field!' },
  { id: 2, title: 'Why don’t scientists trust atoms?', joke: 'Because they make up everything!' },
  { id: 3, title: 'What do you call fake spaghetti?', joke: 'An impasta!' },
  { id: 4, title: 'Why did the bicycle fall over?', joke: 'Because it was two-tired!' },
  { id: 5, title: 'What do you call cheese that isnt yours?', joke: 'Nacho cheese!' }
];

// Serve static files from "public" folder ye chheez sabhi html content ko ek bbar me / route pe serve kar dega special route nahi likna padaga
app.use(express.static(path.join(__dirname, 'public')));// ye kaam tum show kar sakte ho react ke thorough if you want 

app.get('/login', (req, res) => {
  res.send('<h1>Please Login At Anurag Kashyap\'s Website</h1>');
});

app.get('/userdata', (req, res) => {
  res.json(userdata);
});

app.get('/jokes', (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
