import { Meteor } from 'meteor/meteor';
import Product from "../models/product";

Meteor.methods({
    'addProduct'(productName, productPrice, productType) {
        const newProduct = new Product({
            name: productName,
            price: productPrice,
            typeofProduct: productType
        });
        newProduct.save();
    }
});
