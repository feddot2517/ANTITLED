import React from 'react';


import {
    Form,
    Input,
    Button,
} from 'antd';
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/product";
import {withRouter} from "react-router";


class OrderForm extends React.Component {

    addOrder = e => {
        Meteor.call("addOrder", this.props.order.name, this.state.email, this.state.phone, this.props.currentUser && this.props.currentUser.username);
        alert("Your order has been added");
        this.props.history.push('/');
    };

    onChangeEmail = e => {
        this.setState({email: e.target.value})
    };

    onChangePhone = e => {
        this.setState({phone: e.target.value})
    };

    state = {
        email: '',
        phone: '',
    };

    render() {
        const {order} = this.props;
        if(!order) return "";
        return (
            <Form>

                <Form.Item>
                    <h1>Your order:</h1>
                </Form.Item>


                <Form.Item>
                    <div><h1 >{order.name}</h1></div>
                    <div><h1 style={{color:"green"}}> {order.price} </h1></div>
                </Form.Item>


                <Form.Item>
                    <Input placeholder="Input yout E-mail"
                           onChange={this.onChangeEmail}
                           style={{width: 300, marginRight: 10}}
                           type="e-mail"
                    />
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input your phone number"
                           onChange={this.onChangePhone}
                           style={{width: 300, marginRight: 10}}
                           type="phone"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={this.addOrder}>Order it</Button>
                </Form.Item>

            </Form>
        );
    }
}

const orderForm = Form.create({ name: 'register' })(OrderForm);


export default withTracker((props) => {
    const {id} =  props.match.params;
    return {
        order: Product.findOne({_id: id}),
        currentUser: Meteor.user(),
    };
})(orderForm);