import {Class} from 'meteor/jagi:astronomy';

const Order = Class.create({
    name: 'Order',
    collection: new Meteor.Collection('order'),

    fields: {
        order: {
            type: String,
            optional: true,
        },
        email: {
            type: String,
            optional: true,
        },
        phone: {
            type: String,
            optional: true,

        },
    },
});

export default Order;