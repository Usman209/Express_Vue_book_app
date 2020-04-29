const express = require('express')
const app = express();
const sequare = require('./export')
const route =require('./route')
const emoji = require('node-emoji');
const logger = require('morgan')

const { log } = console;
const pizza = emoji.get('pizza');
const message = `It's time for ${pizza}!`;
log(message);

app.get('/', function (req, res) {
    res.send('Text form express index.js')
})

console.log('sequare function from other file is here  ' + sequare.area(5))
console.log('perimeter function from other file is here  ' + sequare.perimeter(5))


// middleware


// An example middleware function
var a_middleware_function = function (req, res, next) {
    console.log('A')
    // ... perform some operations
    next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);



app.use('/mysite', route)
app.use(logger('dev'))

app.listen(3000, function () {
    console.log('app listening on port 3000')
})