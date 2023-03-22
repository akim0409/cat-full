const { DataTypes }= require('sequelize');
const sequelize = require('./index');

const Cat = sequelize.define('Cat', {
  name: DataTypes.STRING,
  breed: DataTypes.STRING,
  imgUrl: DataTypes.STRING
});

sequelize.sync();
// User.sync({ force: true }) // reset the User table

module.exports = Cat;