/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const path = require("path")
const FruitRouter = require('./controllers/fruits')
const UserRouter = require("./controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

app.get('/', (req,res) => {
    
})
app.get('/', (req,res) => {

})
app.post('/', (req,res) => {

})
app.get('/', (req,res) => {

})
app.get('/', (req,res) => {

})
app.put('/', (req,res) => {

})
app.delete('/', (req,res) => {

})

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));