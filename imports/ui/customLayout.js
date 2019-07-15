import React, {Component} from 'react';
import {Breadcrumb,Layout, Menu} from 'antd';
import {withTracker} from "meteor/react-meteor-data";

const {Header, Content, Footer} = Layout;


export default class customLayout extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px', float: 'right'}}
                        onClick={this.handleLogOut}
                    >
                    </Menu>
                </Header>
                <Content style={{padding: 50}}>
                    {this.props.children}
                </Content>
                <Footer style={{textAlign: 'center'}}>fed.</Footer>
            </Layout>
        )
    }
}