const { DataTypes }= require('sequelize');
const sequelize = require('./index');

const Cat = sequelize.define('Cat', {
  name: DataTypes.STRING,
  breed: DataTypes.STRING,
  imgUrl: DataTypes.STRING,
  likes: DataTypes.NUMBER
});

sequelize.sync();

module.exports = Cat;