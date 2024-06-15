import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from 'antd';
import './StudentDBCreation.css'
import { PlusOutlined } from '@ant-design/icons';
const NormFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export class StudentDBCreation extends Component {
  
  render() {
    return (
      <div class='bg-blue' >
        <h1 style={{textAlign:'center'}}>Create student database</h1>
        <Form className='formstudent'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      > 
        <Form.Item label="Create a batch: "style={{ textAlign: 'center'}} >
          <Input style={{backgroundColor:'#CAF0F8', marginLeft: 10, width:500}}/>
        </Form.Item>
        <Form.Item label="Speciality: " >
          <Select placeholder="Select" >
            <Select.Option value="demo" >Medical</Select.Option>
            <Select.Option value="demo" >Nursing</Select.Option>
            <Select.Option value="demo" >Physiotherapy</Select.Option>
            <Select.Option value="demo" >Pharmacy</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Level: ">
          <Select >
            <Select.Option value="demo">UG</Select.Option>
            <Select.Option value="demo">PG</Select.Option>
            <Select.Option value="demo">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Academic Year: ">
          <InputNumber style={{backgroundColor:'#CAF0F8', marginLeft: 10}} />
        </Form.Item>

         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card" >
            <div >
              <PlusOutlined />
              <div>Upload</div>
            </div>
          </Upload>
        </Form.Item> 
        <Form.Item style={{ padding:10}}>
          <Button style={{backgroundColor: '#CAF0F8',margin: 10}}>Create a batch</Button>
          <Button style={{backgroundColor: '#CAF0F8', margin: 10}} href='/'>Next</Button>
          <Button style={{backgroundColor: '#CAF0F8', margin: 10}} href='/studentupdation'>Student updation</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default StudentDBCreation
