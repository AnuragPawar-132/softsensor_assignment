const express = require("express");
const axios = require("axios");
const cors = require("cors")


let data;

axios.get(`https://fakestoreapi.com/products`)
.then((res)=>{
    data = res.data
})
.catch((err)=>console.log(err))

const app = express()
app.use(express.json());
app.use(cors())


app.get("/products", (req, res)=>{
    console.log(req.query)
    res.send(data)
})

app.listen(8000, ()=>{
    console.log("server started on 8000")
})