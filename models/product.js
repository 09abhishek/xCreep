const fs = require('fs');
const path = require('path');

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json'
);

const getProductsFromFile = (callbackfn) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            callbackfn([]);
        }
        callbackfn(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title, price, imageUrl, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
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