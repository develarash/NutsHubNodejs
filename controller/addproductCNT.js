const AddProduct =require('../models/model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content cant not be empty"});
        return;
    }
    const product= new AddProduct({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productNum:req.body.productNum
    });
    
    product.save(product).then((data)=>{
        res.redirect("/");
    }).catch((err)=>{
        res.status(500).send({
            mesaage:err.message ||  "some error occured while creating a operation"
        });
    });
};

exports.find=(req,res)=>{
    AddProduct.find().then(product=>{
        res.send(product);
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Error Occurred while retriving user information"})
    })
}