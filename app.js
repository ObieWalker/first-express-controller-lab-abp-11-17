var express = require('express')
var app = express()

app.get('/', siteController.Index(req, res){

})
app.get('/about', siteController.About(){

})
app.get('/contact', siteController.Contact(){

})


module.exports = app
