import React, { Component } from 'react';
import Page from 'components/LayoutComponents/Page';
import { Upload, Form, Icon, Button, message } from 'antd';

const { Dragger } = Upload;

const propss = {
  name: 'file',
  multiple: false,
  accept: '.pdf',
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    console.log('clgt', info);
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class UploadFile extends Component {
  state = {};

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch}>
        <Form.Item>
          {getFieldDecorator('upload-file', {
            rules: [{
              required: true,
              message: 'Xin bạn hay chọn file pdf',
            }],
          })(
            <Dragger {...propss}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>)}
        </Form.Item>

        <Button type="primary" htmlType="submit">Search</Button>
      </Form>
    );
  }
}

const FormUploadFile = Form.create({ name: 'register' })(UploadFile);

export default props => (
  <Page {...props}>
    <FormUploadFile />
  </Page>
);
