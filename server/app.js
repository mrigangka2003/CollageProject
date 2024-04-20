require('dotenv').config() ;
const express = require('express') ;
const app = express() ;
const cors = require('cors')

const PORT = process.env.PORT ;

app.use(cors()) ;

app.get('/',(req,res)=>{
    res.json("Hi Ma'am please give us the full Marks , regards group 8") ;
})

app.listen(PORT,()=> {
    console.log(`Server is Running on the ${PORT}`) ;
})