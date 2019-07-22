import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {withRouter} from "react-router";


const {Header, Content, Footer} = Layout;

const {SubMenu} = Menu;

const Iphone = 'iphone';
const Nokia = 'nokia';
const Xiaomi = 'xiaomi';


class CustomLayout extends Component {

    pushAddProduct = e => {
        this.props.history.push('/addproduct');
    }

    pushViewOrder = e => {
        this.props.history.push('/order/view/');
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
                        <Menu.Item onClick={this.pushAddProduct}>Add item</Menu.Item>
                        <Menu.Item onClick={this.pushViewOrder}>View orders</Menu.Item>
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

export default withRouter(CustomLayout)