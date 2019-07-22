import React from 'react';
import Img from 'react-image'
import {Button, Menu, Card, Icon} from 'antd';
import Order from "../../models/order";

import {withTracker} from 'meteor/react-meteor-data';

class orderView extends React.Component {

    render() {
        return (
            <div>
                {this.props.orders && this.props.orders.map((order, id) => (
                    <Card key={id}>
                        <div style={{
                            color: 'black',
                            display: 'inline-block',
                            marginRight: 5}}
                        >
                            <div style={{display: "inline-block", marginRight: 15}}>{order.order} </div>
                            <div style={{display: "inline-block", marginRight: 15}}>{order.email} </div>
                            <div style={{display: "inline-block", marginRight: 15}}>{order.phone} </div>
                            <div style={{display: "inline-block"}}>
                                <Button type="danger">X</Button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Card>

                ))}
            </div>
        )

    }
}

export default withTracker(()  => {
    return {
        orders: Order.find().fetch(),
    }
})(orderView);

