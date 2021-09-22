const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const matchRouter=require("./routes/matchs")

const URI='mongodb+srv://navin:navin27@cluster0.rouo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.use('/',(req, res, next) => {res.send("Hello")})

app.use('/matchs',matchRouter);



mongoose.connect(URI, {useUnifiedTopology: true,useNewUrlParser: true}).then(()=>console.log("DB Connected"))

app.listen(4000,()=>console.log("HELLO!"))


