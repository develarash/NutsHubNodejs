const axios=require('axios');

exports.addproduct=(req,res)=>{
    res.render("index")

}
exports.prodcutprice=(req,res)=>{
    axios.get("http://localhost:3000/api/products").then
    (function(response){
        res.render("products",{product:response.data})
    }).catch(err=>{
        res.send(err);
    })

}
