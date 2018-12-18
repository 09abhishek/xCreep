// core Node.js modules.
const path = require('path');
const rootDir = require('../xCreep/utils/path');
const http = require('http');

// 3rd party module.
const express = require('express');
const bodyparser = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const server = http.createServer(app);

app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).send('</h1>Page not found</h1>');
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    
    // res.end();
});

server.listen(3000);