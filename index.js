const express = require('express')
const app = express();
const emoji = require('node-emoji');
const logger = require('morgan')


app.get('/', function (req, res) {
    res.send('Text form express index.js')
})

app.use(logger('dev'))

app.listen(3000, function () {
    console.log('app listening on port 3000')
})