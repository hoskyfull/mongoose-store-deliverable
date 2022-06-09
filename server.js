/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const path = require("path")
const FruitRouter = require('./controllers/fruits')
const UserRouter = require("./controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");