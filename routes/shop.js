const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {
 const products = adminData.products;
 res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });

  
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   // console.log(adminData.products);
    // res.end();
});

module.exports = router;