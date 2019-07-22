import React from 'react';
import { Route } from 'react-router-dom';
import iphone from '../ui/containers/iphone';

import orderForm from '../ui/containers/orderForm';
import addProductForm from '../ui/containers/addProductForm';
import mainPage from '../ui/containers/mainPage';
import orderView from '../ui/containers/orderView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={mainPage}/>
        <Route exact path='/category/:id/' component={iphone} />
        <Route exact path='/order/:id/' component={orderForm}/>
        <Route exatc path='/addproduct/' component={addProductForm}/>
        <Route exatc path='/order/view/' component={orderView}/>

    </div>
);

export default BaseRouter;