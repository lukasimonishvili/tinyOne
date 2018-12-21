let express = require("express");
let app = express();
let port = 3000;


app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);

console.log("localhost:3000");