import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import { Row, Col } from "antd";
import './WorkshopRP.css';

export class WorkshopReport extends Component {
  render() {
    return (
      <div className="container mx-auto  mt-10 px-40 pb-10">
        <h1 className="text-2xl font-bold text-center mb-8">Workshop Report</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Form layout="vertical">
              <Form.Item label="Title of Workshop:">
                <Input style={{ backgroundColor: '#CAF0F8' }} />
              </Form.Item>

              <Form.Item label="Lead Faculty:">
                <Input style={{ backgroundColor: '#CAF0F8' }} />
              </Form.Item>

              <Form.Item label="Program structure:">
                <Select style={{ width: '100%' }}>
                  <Select.Option value="ACLS">ACLS</Select.Option>
                  <Select.Option value="Trauma-I">Trauma-I</Select.Option>
                  <Select.Option value="Trauma-II">Trauma-II</Select.Option>
                  <Select.Option value="NRP-I">NRP-I</Select.Option>
                  <Select.Option value="POCUS">POCUS</Select.Option>
                  <Select.Option value="ACN">ACN</Select.Option>
                  <Select.Option value="Endoscopy">Endoscopy</Select.Option>
                  <Select.Option value="Laproscopy">Laproscopy</Select.Option>
                  <Select.Option value="Ultrasound for Radiology">Ultrasound for Radiology</Select.Option>
                  <Select.Option value="Ultrasound for OBGYN">Ultrasound for OBGYN</Select.Option>
                  <Select.Option value="Advanced ventilation">Advanced ventilation</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8}>
            <Form layout="vertical">
              <Form.Item label="Details Page:">
                <Input style={{ backgroundColor: '#CAF0F8' }} />
              </Form.Item>
              <Form.Item label="Attendance:">
                <Input style={{ backgroundColor: '#CAF0F8' }} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <div className="flex justify-center mt-8">
          <Button type="primary" className="btn" style={{ marginBottom: 10 }}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default WorkshopReport;
