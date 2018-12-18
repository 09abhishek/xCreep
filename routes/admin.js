const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const products = [];
router.get('/add-product', (req, res, next) => {
  //  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); 
   
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    // res.end();
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    const item = req.body;
    products.push(item);
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
