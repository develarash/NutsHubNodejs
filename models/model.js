const mongoose =require('mongoose');

const addProduct=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productNum:{
        type:Number,
        required:true,
    }
    
})

const AddProduct=mongoose.model("addProduct",addProduct)
module.exports=AddProduct;
//  default: Date.now