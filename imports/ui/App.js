import React, { Component } from 'react';
import CustomLayout from "./customLayout"
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';
import Product from '../models/product';


// App component - represents the whole app
class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div >
                <Router  >
            <CustomLayout >
                <BaseRouter/>
            </CustomLayout>
                </Router>
            </div>
         );
    }
}

export default App;