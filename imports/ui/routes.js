import React from 'react';
import { Route } from 'react-router-dom';
import iphone from '../ui/containers/iphone'
import orderForm from '../ui/containers/orderForm'
import addProductForm from '../ui/containers/addProductForm'


const BaseRouter = () => (
    <div>
        <Route exact path='/iphone/' component={iphone} />
        <Route exact path='/order/' component={orderForm}/>
        <Route exatc path='/addproduct/' component={addProductForm}/>
    </div>
);

export default BaseRouter;