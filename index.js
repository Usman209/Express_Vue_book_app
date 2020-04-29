const express = require('express')
const app = express();
const sequare = require('./export')
const route =require('./route')

app.get('/', function (req, res) {
    res.send('Text form express index.js')
})

console.log('sequare function from other file is here  ' + sequare.area(5))
console.log('perimeter function from other file is here  ' + sequare.perimeter(5))

app.use('/mysite',route)

app.listen(3000, function () {
    console.log('app listening on port 3000')
})