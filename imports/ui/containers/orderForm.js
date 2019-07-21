import React from 'react';


import {
    Form,
    Input,
    Button,
} from 'antd';


class OrderForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    render() {
        return (
            <Form>

                <Form.Item>
                    <h1>Your order</h1>
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input yout E-mail"
                           style={{width: 300, marginRight: 10}}
                           type="e-mail"
                    />
                </Form.Item>

                <Form.Item>
                    <Input placeholder="Input your phone number"
                           style={{width: 300, marginRight: 10}}
                           type="phone"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Order it</Button>
                </Form.Item>

            </Form>
        );
    }
}

const orderForm = Form.create({ name: 'register' })(OrderForm);
export default orderForm;