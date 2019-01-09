// core Node.js modules.
const path = require('path');
const rootDir = require('../xCreep/utils/path');
const http = require('http');

// 3rd party module.
const express = require('express');
const bodyparser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const server = http.createServer(app);

app.use(bodyparser.urlencoded({ extended: true}));

// for serving staitic files like html/js/css.
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

server.listen(3000);