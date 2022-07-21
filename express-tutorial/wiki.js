const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
console.log('Time: ', Date.now())
next()
});

router.get('/', function(req,res) {
    res.send("<h2 style='color:red;margin:20px'>Wiki home page</h2>");
});

router.all('/about', function(req,res) {
    res.send("<h2 style='color:red;margin:20px'>Wiki About page</h2>");
});

module.exports = router;