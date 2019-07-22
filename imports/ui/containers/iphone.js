import React from 'react';
import Img from 'react-image'
import {Button, Menu, Card} from 'antd';
import Product from "../../models/product";

import {withTracker} from 'meteor/react-meteor-data';

class iphone extends React.Component {

    pushOrderPageInHistory = (productname) => {
        this.props.history.push(`/order/${productname}`);
    }



    render() {
        return (
            <div>
                {this.props.products && this.props.products.map((product, id) => (
                  <Card key={id}>
                      <div style={{
                          color: 'black',
                          display: 'inline-block',
                          marginRight: 5}}
                              >
                          <div style={{display: "inline-block", marginRight: 15}}>{product.name} </div>
                          <div style={{color:"green", display: "inline-block", marginRight: 15}}>{product.price} </div>
                          <div>
                              <Button style={{color:"white"}} type="primary" onClick={()=>this.pushOrderPageInHistory(product._id)}>
                                  Order it
                              </Button>
                          </div>
                      </div>
                  </Card>

                    ))}
            </div>
        )

    }
}

export default withTracker((props) => {
      const {id} =  props.match.params;
      return {
        products: Product.find({typeofProduct: id}).fetch()
      };
})(iphone);

