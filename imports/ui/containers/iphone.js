import React from 'react';
import Img from 'react-image'
import {Button, Menu, Card} from 'antd';
import Product from "../../models/product";

import {withTracker} from 'meteor/react-meteor-data';
class iphone extends React.Component {

    pushOrderPageInHistory = e => {
        this.props.history.push('/order');
    }

    render() {
        // console.log(this.props);
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

export default withTracker(() => {
  return {
    products: Product.find().fetch()
  };
})(iphone);

