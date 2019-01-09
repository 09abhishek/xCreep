const path = require('path');
const express = require('express');

const router = express.Router();

// const rootDir = require('../utils/path');

const productController = require('../controllers/products');

const adminData = require('./admin');

router.get('/', productController.getProducts);

module.exports = router;