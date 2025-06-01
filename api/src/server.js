require("dotenv").config();
const connectToDatabase = require("./database/connect");

connectToDatabase();

require("./modules/express");