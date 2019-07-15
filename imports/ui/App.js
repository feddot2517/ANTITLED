import React, { Component } from 'react';
import { DatePicker } from 'antd';
import customLayout from "./customLayout"


// App component - represents the whole app
class App extends Component {
    render() {
        console.log(this.props);
        return (
            <customLayout></customLayout>
    );
    }
}

export default App;