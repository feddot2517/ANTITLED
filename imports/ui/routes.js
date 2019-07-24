import React from 'react';
import { Route } from 'react-router-dom';
import iphone from '../ui/containers/iphone';

import orderForm from '../ui/containers/orderForm';
import addProductForm from '../ui/containers/addProductForm';
import mainPage from '../ui/containers/mainPage';
import WrappedNormalLoginForm from '../ui/containers/login';
import WrappedRegistrationForm from '../ui/containers/signup';
import orderView from '../ui/containers/orderView';
import profile from '../ui/containers/profile';



const BaseRouter = () => (
    <div>
        <Route exact path='/' component={mainPage}/>
        <Route exact path='/category/:id/' component={iphone} />
        <Route exact path='/order/:id/' component={orderForm}/>
        <Route exatc path='/addproduct/' component={addProductForm}/>
        <Route exatc path='/order/view/' component={orderView}/>
        <Route exatc path='/login/' component={WrappedNormalLoginForm}/>
        <Route exatc path='/signup/' component={WrappedRegistrationForm}/>
        <Route exatc path='/profile/:id' component={profile}/>

    </div>
);

export default BaseRouter;