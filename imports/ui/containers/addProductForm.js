import React from 'react';
import { Cascader } from 'antd';
import Images from "../../models/image";


import {Button, Form, Input, Upload, Icon, message} from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);

}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';


    if (!isJPG && !isPNG) {
        message.error('You can only upload JPG or PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }


    return (isJPG || isPNG) &&  isLt2M;
}


class OrderForm extends React.Component {

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            console.log(info.file);

            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {

                    // Images.insert({
                    //   file: imageUrl.split(',')[1],
                    //   isBase64: true, // <— Mandatory
                    //   fileName: 'pic.png', // <— Mandatory
                    //   type: info.file.originFileObj.type
                    // });

                    if(this.props.handleImage)
                        this.props.handleImage({
                            file: imageUrl.split(',')[1],
                            isBase64: true,
                            fileName: 'pic.png',
                            type: info.file.originFileObj.type
                        });

                    this.setState({
                        imageUrl,
                        loading: false,
                    })
                }
            );
        }
    }


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
    message.success("New product was added");
    this.props.history.push('/');
  };

  state = {
    productName: '',
    productPrice: '',
    productType: '',
    loading: false,
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
      console.log(Images.find().fetch());
      const uploadButton = (
          <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
          </div>
      );
      const imageUrl = this.state.imageUrl;
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
              <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
              >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
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