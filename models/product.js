const fs = require('fs');
const path = require('path');

const getProductsFromFile = (callback) => {
    const filePath = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'product.json'
        );

fs.readFile(filePath, (err, fileContent) => {
    if(err) {
     callback([]);
    }
    callback(JSON.parse(fileContent));
});
}

module.exports = class Product {
    constructor(title) {
         this.title = title;   
    }   

    save() {
       const filePath = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'product.json'
        );

        fs.readFile(filePath, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    }

    static fetchAll(callback) {
      getProductsFromFile(callback);
    }
}