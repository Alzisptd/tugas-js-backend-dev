const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res) =>{
    res.send('Hello, Word , Aku Alzi');
});


app.listen(port,() =>{
    console.log(`Server is Running at <http://localhost>:{$port}`);
});