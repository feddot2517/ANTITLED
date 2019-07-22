import { Meteor } from 'meteor/meteor';
import Product from "../models/product";
import Order from "../models/order";

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

Meteor.methods({
    'addOrder'(order, email, phone) {
        const newOrder = new Order({
            order: order,
            email: email,
            phone: phone
        });
        newOrder.save();
    }
});

Meteor.methods({
    'delOrder'(orderId) {
        Order.remove({_id: orderId});
    }
});


