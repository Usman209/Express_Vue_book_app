const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('route home page')
})
router.get('/about', function (req, res) {
    res.send('route about page')
})

module.exports=router