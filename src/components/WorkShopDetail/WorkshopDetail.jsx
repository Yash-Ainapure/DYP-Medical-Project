import React, { Component } from 'react';
import { Button, Form, Select, DatePicker, Upload, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const NormFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

class WorkshopDetail extends Component {
  render() {
    return (
      <div className="container mx-auto mt-8 px-40">
        <h1 className="text-2xl font-bold text-center mb-8">Workshop Detail Update</h1>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 800 }}
        >
          <Form.Item name="date-picker" label="Date: ">
            <DatePicker style={{ backgroundColor: '#CAF0F8', width: '100%' }} />
          </Form.Item>
          <Form.Item name="name" label="Name: ">
            <Select placeholder="Select workshop name">
              <Select.Option value="Workshop 1">Workshop 1</Select.Option>
              <Select.Option value="Workshop 2">Workshop 2</Select.Option>
              <Select.Option value="Workshop 3">Workshop 3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="faculty" label="Faculty Name: ">
            <Select placeholder="Select faculty name">
              <Select.Option value="TF 1">TF 1</Select.Option>
              <Select.Option value="TF 2">TF 2</Select.Option>
              <Select.Option value="TF 3">TF 3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="type" label="Type: ">
            <Select placeholder="Select type of workshop">
              <Select.Option value="Type 1">Type 1</Select.Option>
              <Select.Option value="Type 2">Type 2</Select.Option>
              <Select.Option value="Type 3">Type 3</Select.Option>
            </Select>
          </Form.Item>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="attendanceSheet"
                valuePropName="fileList"
                getValueFromEvent={NormFile}
            
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Attendance sheet</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="prePostTest"
                valuePropName="fileList"
                getValueFromEvent={NormFile}
               
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Pre & Post-test</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={6} >
              <Form.Item
            
                name="uploadDoc"
                valuePropName="fileList"
                getValueFromEvent={NormFile}
              
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }} >Upload document</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="uploadPNG"
                valuePropName="fileList"
                getValueFromEvent={NormFile}
             
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload PNG format</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Save & Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default WorkshopDetail;
