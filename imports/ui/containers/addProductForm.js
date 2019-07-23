import React from 'react';
import { Cascader } from 'antd';


import {Button, Form, Input, Upload, Icon, message} from 'antd';



class OrderForm extends React.Component {

    props1 = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                console.log(info.file.url);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    options = [
        {
            value: 'iphone',
            label: 'iPhone',
        },
        {
            value: 'nokia',
            label: 'Nokia',
        },
        {
            value: 'xiaomi',
            label: 'Xiaomi',
        }
    ];


  addNewProduct = e => {
    Meteor.call("addProduct", this.state.productName, this.state.productPrice, this.state.productType);
    alert("its ok");
    this.props.history.push('/');
  };

  state = {
    productName: '',
    productPrice: '',
    productType: ''
  };

   onChange = value => {
       this.setState({productType: value[0]});
    };


    onChangeName = e => {
    this.setState({productName: e.target.value})
  };

  onChangePrice = e => {
    this.setState({productPrice: e.target.value})
  };

  render() {
    return (
      <Form>

        <Form.Item>
          <h1>Add product</h1>
        </Form.Item>

        <Form.Item>
          <Input placeholder="Input product name"
                 style={{width: 300, marginRight: 10}}
                 value={this.state.productName}
                 onChange={this.onChangeName}
                 type="productName"
          />
        </Form.Item>

        <Form.Item>
          <Input placeholder="Input product price"
                 style={{width: 300, marginRight: 10}}
                 value={this.state.productPrice}
                 onChange={this.onChangePrice}
                 type="productPrice"
          />
        </Form.Item>

        <Form.Item>
            <Cascader options={this.options}
                      onChange={this.onChange}
                      placeholder="Please select"
                      style={{width: 300, marginRight: 10}}
            />
        </Form.Item>

          <Form.Item>
              <Upload {...this.props1}>
                  <Button>
                      <Icon type="upload" /> Upload image
                  </Button>
              </Upload>,
          </Form.Item>

        <Form.Item>
          <Button type="primary"  onClick={this.addNewProduct} style={{float: 'mid', color: 'white'}}>Add
            product!</Button>
        </Form.Item>

      </Form>
    );
  }
}

export default OrderForm;