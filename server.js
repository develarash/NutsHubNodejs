const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const bodyParser= require('body-parser');
const path =require('path');

const connectDB=require('./dataBase/connection');
// after morgan connectDB()


const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"))

// mongo connection
connectDB();

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"views"))

// load assets
app.use(express.static(path.resolve(__dirname,"assets")))
// app.use("/js",express.static(path.resolve(__dirname,"assets/js")))
// app.use("/img",express.static(path.resolve(__dirname,"assets/img")))

// Load Routers
app.use("/",require("./routes/router.js"))

// app.use("/",(req,res)=>{
//     res.render("index")
// })


app.listen(PORT, () => {
  console.log(`server is running on https://localhost: ${PORT}`);
});
