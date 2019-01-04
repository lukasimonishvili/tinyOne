const express = require("express");
const app = express();
const port = 3000;

app.use("/assets", express.static(__dirname + "/assets"));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.listen(port, function(){
    console.log("localhost:3000 is aviable now");
});