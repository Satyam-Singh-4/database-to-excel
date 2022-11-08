const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Task3", "root", "Tectoro@123", {
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
