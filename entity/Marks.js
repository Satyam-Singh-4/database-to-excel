const Sequelize = require("sequelize");
const sequelize = require("../configuration/db");

const Marks = sequelize.define("Marks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  mark1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mark2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Marks;