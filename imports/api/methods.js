import { Meteor } from 'meteor/meteor';
import Product from "../models/product";
import Order from "../models/order";
import { Accounts } from 'meteor/accounts-base'

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
    'addOrder'(order, email, phone, username) {
        const newOrder = new Order({
            order: order,
            email: email,
            phone: phone,
            username: username,
        });
        newOrder.save();
    }
});

Meteor.methods({
    'delOrder'(orderId) {
        Order.remove({_id: orderId});
    }
});


Meteor.methods({
    'addUser'(values,callback) {

        Accounts.createUser({
            username: values.username,
            password: values.password,
        },callback);
        console.log(values.username);
    },
});

