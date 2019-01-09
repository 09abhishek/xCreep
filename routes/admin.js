const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const products = [];
router.get('/add-product', (req, res, next) => {
  //  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); 
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });

    // res.end();
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    
    res.redirect('/');
    // console.log(req.body);
    // const item = req.body;
    // products.push(item);
    // res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
