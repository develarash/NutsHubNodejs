const { Route } = require('express');
const express=require('express');
const route=express.Router();
const services=require('../services/render');
const controller=require("../controller/addproductCNT")

// Routes Rendering
route.get("/",services.prodcutprice);
route.get("/addproduct",services.addproduct);

// API
route.post("/api/addproduct",controller.create);
route.get("/api/products",controller.find)
module.exports=route