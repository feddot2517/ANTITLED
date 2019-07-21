import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {withRouter} from "react-router";


const {Header, Content, Footer} = Layout;

const {SubMenu} = Menu;


class CustomLayout extends Component {

    pushMainPageInHistory = e => {
        this.props.history.push('/')
    }

    pushIphoneInHistory = e => {
        this.props.history.push('/iphone')
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
                        <Menu.Item onClick={this.pushIphoneInHistory}>iPhone</Menu.Item>
                        <Menu.Item onClick={this.consoleLog}>Nokia</Menu.Item>
                        <Menu.Item onClick={this.consoleLog}>Xiaomi</Menu.Item>
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