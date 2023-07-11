const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

module.exports = OrderItem;
