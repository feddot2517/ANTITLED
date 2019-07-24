import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {withRouter} from "react-router";
import {withTracker} from 'meteor/react-meteor-data';


const {Header, Content, Footer} = Layout;

const {SubMenu} = Menu;

const Iphone = 'iphone';
const Nokia = 'nokia';
const Xiaomi = 'xiaomi';




class CustomLayout extends Component {

    pushAddProduct = e => {
        this.props.history.push('/addproduct');
    }

    pushProfileProduct = username => {
        this.props.history.push(`/profile/${username}`);
    }

    pushSignUpPage = e => {
        this.props.history.push('/signup');
    }


    pushViewOrder = e => {
        this.props.history.push('/order/view/');
    }

    pushLoginPage= e => {
        this.props.history.push('/login');
    }



    pushMainPageInHistory = e => {
        this.props.history.push('/')
    }

    pushCategoryInHistory = (categoryName) => {
        this.props.history.push(`/category/${categoryName}`)
    }

    consoleLog = e => {
        console.log("hello");
    }

    render() {
        console.log(this.props.currentUser && this.props.currentUser.username);
        return (
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px', float: 'left', color: "ff2"}}
                    >
                        <Menu.Item onClick={this.pushMainPageInHistory}>WebStore</Menu.Item>
                        <Menu.Item onClick={()=>this.pushCategoryInHistory(Iphone)}>iPhone</Menu.Item>
                        <Menu.Item onClick={()=>this.pushCategoryInHistory(Nokia)}>Nokia</Menu.Item>
                        <Menu.Item onClick={()=>this.pushCategoryInHistory(Xiaomi)}>Xiaomi</Menu.Item>
                        {this.props.currentUser && this.props.currentUser.username === 'admin'?
                        <Menu.Item onClick={this.pushAddProduct}>Add item</Menu.Item>:""}
                        {this.props.currentUser && this.props.currentUser.username === 'admin'?
                        <Menu.Item onClick={this.pushViewOrder}>View orders</Menu.Item>:""}
                        {this.props.currentUser ?
                        <Menu.Item onClick={()=>this.pushProfileProduct(this.props.currentUser.username)}>{this.props.currentUser.username}</Menu.Item>:

                        <Menu.Item onClick={this.pushLoginPage}>Login</Menu.Item>}
                    </Menu>
                </Header>
                <Content color={"fgf"} style={{padding: 10, minHeight:1000}}>
                    {this.props.children}
                </Content>
                <Footer style={{textAlign: 'center'}}>fed.</Footer>
            </Layout>
        )
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(withRouter(CustomLayout));

