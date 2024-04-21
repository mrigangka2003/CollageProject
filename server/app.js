require('dotenv').config() ;
const express = require('express') ;
const app = express() ;
const cors = require('cors')
const connectDB = require('./src/config/db')
const PORT = process.env.PORT ;

app.use(cors()) ;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB() ;

app.use("/" , require("./src/routes/home.route"))
app.use("/" , require("./src/routes/getData.route"))

app.get('/',(req,res)=>{
    res.json("Hi Ma'am please give us the full Marks , regards group 8") ;
})

app.listen(PORT,()=> {
    console.log(`Server is Running on the ${PORT}`) ;
})