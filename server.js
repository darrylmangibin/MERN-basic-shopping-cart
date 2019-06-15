const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// ROUTES
const items = require('./routes/api/items');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB config
const db = require('./config/keys').mongoURI;
mongoose.connect(db,{ useNewUrlParser: true }).then(() => {
  console.log('MongoDB Connected')
}).catch(() => console.log('Connection Failed'))

app.use('/api/items', items);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})