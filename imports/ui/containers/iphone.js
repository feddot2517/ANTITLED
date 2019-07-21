import React from 'react';
import Img from 'react-image'
import {Button, Menu, Card} from 'antd';

class iphone extends React.Component {

    pushOrderPageInHistory = e => {
        this.props.history.push('/order');
    }

    render() {
        return (
            <div>
                {this.props.products && this.props.products.map((product, id) => (
                  <Card key={id}>
                      <div>
                          <div>{product.name}</div>
                      </div>
                  </Card>

                    ))}
            </div>
        )

    }
}

export default iphone;

