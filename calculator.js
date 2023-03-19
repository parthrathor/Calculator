const express = require("express");
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get(("/"),function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get(("/bmicalculator"),function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post(("/"),function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result=num1+num2;
  res.send("The result is " + result);
});
app.post(("/bmicalculator"),function(req, res){
  var wt = parseFloat(req.body.weight);
  var ht = parseFloat(req.body.height);
  var result=wt/(ht*ht);
  res.send("Your bmi is " + result);
});
app.listen(1000,function(){
  console.log("server started at port 1000");
});
