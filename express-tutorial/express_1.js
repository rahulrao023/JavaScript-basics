const express = require("express");
const wiki = require('./wiki.js');

const app = express();
const port = 3000;

app.get('/',function(req,res) {
    res.send("<h2 style='color:red;margin:20px'>First express app</h2>");

});

app.use('/wiki',wiki);

app.listen(port, function() {
    console.log("Server running!");
});