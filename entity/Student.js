const Sequelize = require("sequelize");
const sequelize = require("../configuration/db");
const Mark=require('../entity/Marks')

const Student = sequelize.define("Student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  s_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Student.hasOne(Mark)
Mark.belongsTo(Student)


module.exports = Student;
