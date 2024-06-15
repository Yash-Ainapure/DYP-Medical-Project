import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
} from 'antd';
import { Col, Row } from 'antd';
const { RangePicker } = DatePicker;
const config = {
  rules: [{ type: 'object', required: false, message: 'Please select time!' }],
};
import { PlusOutlined } from '@ant-design/icons';
const NormFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export class WorkshopDetail extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Workshop Detail Update</h1>
         <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
      <Form.Item name="date-picker" label="Date: " {...config}>
      <DatePicker  style={{backgroundColor:'#CAF0F8'}}/>
    </Form.Item>
        <Form.Item label="Name: ">
          <Select placeholder="select workshop name">
            <Select.Option value="demo">Workshop 1</Select.Option>
            <Select.Option value="demo">Workshop 2</Select.Option>
            <Select.Option value="demo">Workshop 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Faculty Name: ">
          <Select placeholder="select faculty name">
            <Select.Option value="demo">TF 1</Select.Option>
            <Select.Option value="demo">TF 2</Select.Option>
            <Select.Option value="demo">TF 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Type: ">
          <Select placeholder="select Type of workshop">
            <Select.Option value="demo">Type 1</Select.Option>
            <Select.Option value="demo">Type 2</Select.Option>
            <Select.Option value="demo">Type 3</Select.Option>
          </Select>
        </Form.Item>
        <Row>
        <Col span={6}>
        <Form.Item  valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Attendence sheet</div>
            </div>
          </Upload>
        </Form.Item>
        </Col>
        <Col span={6}>
        <Form.Item  valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Pre & Post-test</div>
            </div>
          </Upload>
        </Form.Item> 
        </Col>
        <Col span={6}>
        <Form.Item valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload doc</div>
            </div>
          </Upload>
        </Form.Item> 
        </Col>
        <Col span={6}>
        <Form.Item  valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload PNG format</div>
            </div>
          </Upload>
        </Form.Item>
        </Col> 
        </Row>
        <Form.Item className=''>
          <Button  style={{backgroundColor:'#CAF0F8'}}>save & Update</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default WorkshopDetail
