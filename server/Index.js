const express = require('express');
const Port = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.listen(Port , ()=>(console.log(`server is Running at ${Port}`)));