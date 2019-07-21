import {Class} from 'meteor/jagi:astronomy';

const Product = Class.create({
    name: 'Product',
    collection: new Meteor.Collection('products'),

    fields: {
        name: {
            type: String,
            optional: true,
        },
        price: {
            type: String,
            optional: true,
        },
        typeofProduct: {
            type: String,
            optional: true,

        },
    },
});

export default Product;