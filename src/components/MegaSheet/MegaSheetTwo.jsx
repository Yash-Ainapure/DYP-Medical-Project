import React, { Component } from 'react';
import { Button, Form, InputNumber} from 'antd';
import { Col, Row, Select } from 'antd';


export class MegaSheetTwo extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center', marginTop:10}}>Mega sheet entry part - II</h1>
        <Row className='mx-10'>
          <Col span={8} >
            <Form.Item label="Out of Participants :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="UG :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="PG :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Interns :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Fellowship: ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Faculty :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="BSc Nursing:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="MSc Nursing:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="No of Beneficiaries : ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="No. of Workshop Day’s :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>

          </Col>
          <Col span={8}>
            <Form.Item label="MSc Nursing Faculty :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Nursing Staff/Attendance :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Physiotherapy Students :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Physiotherapy Faculty :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Pharmacy :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="External Beneficiaries:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="% of Beneficiaries:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="No. of workshop:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="No of Beneficiaries : ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="No. of Workshop Day’s :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>

          </Col>
          <Col span={8}>
          <Form.Item label="Department"  > 
          <Select>
            <Select.Option value="Anesthesiology">Anesthesiology</Select.Option>
            <Select.Option value="Dermatology">Dermatology</Select.Option>
            <Select.Option value="G. Medicine">G. Medicine</Select.Option>
            <Select.Option value="G. Surgery">G. Surgery</Select.Option>
            <Select.Option value="Obst & Gyn">Obst & Gyn</Select.Option>
            <Select.Option value="Ophthalmology">Ophthalmology</Select.Option>
            <Select.Option value="Orthopedics">Orthopedics</Select.Option>
            <Select.Option value="Pediatrics">Pediatrics</Select.Option>
            <Select.Option value="Pathology">Pathology</Select.Option>
            <Select.Option value="Psychiatry">Psychiatry</Select.Option>
            <Select.Option value="Radio-Diagnosis">Radio-Diagnosis</Select.Option>
          </Select>
        </Form.Item>
            <Form.Item label="Apollo:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Task Trainer:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Laparoscopy:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Lucina: ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Anatomage: ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Vimedix: ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Laparoscopy:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Luna: ">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Endoscopy:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Blue Phantom:">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
          </Col>
        </Row>
        <Button href='/megasheet1' style={{marginBottom:10, marginLeft:10,backgroundColor:'blue', color:'white'}}>Previous</Button>
        <Button href='#' style={{marginBottom:10, marginLeft:10,backgroundColor:'blue', color:'white'}}>Save</Button>
      </div>
    )
  }
}

export default MegaSheetTwo
