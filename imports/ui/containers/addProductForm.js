import React from 'react';


import {
    Form,
    Input,
    Button,
} from 'antd';


class OrderForm extends React.Component {

    addNewProduct = e => {
        Meteor.call("addProduct", this.state.productName, this.state.productPrice, this.state.productType);
        alert("its ok");
    }

    state = {
        productName: '',
        productPrice: '',
        productType: ''
    };

    onChangeName = e => {
        this.setState({productName: e.target.value})
    };

    onChangePrice = e => {
        this.setState({productPrice: e.target.value})
    };

    onChangeType = e => {
        this.setState({productType: e.target.value})
    };

    render() {
        return (
            <Form>

                <Form.Item>
                    <h1>Add product</h1>
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input product name"
                           style={{width: 300, marginRight: 10}}
                           value={this.state.productName}
                           onChange={this.onChangeName}
                           type="productName"
                    />
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input product price"
                           style={{width: 300, marginRight: 10}}
                           value={this.state.productPrice}
                           onChange={this.onChangePrice}
                           type="productPrice"
                    />
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input product type (iphone, xiaomi or nokia)"
                           style={{width: 300, marginRight: 10}}
                           value={this.state.productType}
                           onChange={this.onChangeType}
                           type="productType"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={this.addNewProduct} style={{float: 'mid', color: 'white'}}>Add product!</Button>
                </Form.Item>

            </Form>
        );
    }
}

const orderForm = Form.create({ name: 'register' })(OrderForm);
export default orderForm;