const express = require("express");
const sequelize = require("./configuration/db");
const bodyParser = require("body-parser");
//model import
const Student=require('./entity/Student')
const Marks=require('./entity/Marks')
const cors = require("cors");
require("dotenv").config();
const router = require("./router/router")

const app = express();
app.use(cors());
// To read JSON data in URL body
app.use(bodyParser.json());
app.use("/", router);
// To read log URLs
app.use(bodyParser.urlencoded({ extended: true }));
//synchronizing models
sequelize.sync({alter:true})
  .then((result) => {
    console.log("created");
  })
  .catch((err) => {
    console.log("not created");
  });

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port no:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

run();