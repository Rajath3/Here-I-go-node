var express = require('express')
var app = express()

var myLogger = function(req,res,next) {
    console.log('Logged')
    next()
}

var requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(myLogger)
app.use(requestTime)

app.get('/', function(req,res) {
    res.send("hello")
});

app.get('/middleware', function(req,res){
    var text = "Requested at:"+ req.requestTime 
    res.send(text)
})

app.listen(3000);
