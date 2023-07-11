const express = require("express");
const sequelize = require('./db/db.connect');
const route = require('./router/router');
const app = express();
require('dotenv').config();
const PORT = process.env.POR||3000
const cors = require("cors");

const User = require('./model/user');
const Client = require('./model/Client');
const Seller = require('./model/Seller');
const Category = require('./model/Category');
const Product = require('./model/Product');
const Order = require('./model/Order');
const OrderItem = require('./model/OderItem');
const Review = require('./model/Review');


app.use(express.json());
app.use(cors());

// app.use(route);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false}); // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });