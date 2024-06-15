import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
export class studentupdation extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Individual student addition</h1>
         <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 600 , textAlign: 'center'}}
      >
        <Form.Item label="First Name: ">
          <Input  style={{backgroundColor:'#CAF0F8'}}/>
        </Form.Item>
        <Form.Item label="Last Name: ">
          <Input  style={{backgroundColor:'#CAF0F8'}}/>
        </Form.Item>
        <Form.Item label="Enter Email: ">
          <Input  style={{backgroundColor:'#CAF0F8'}}/>
        </Form.Item>
        <Form.Item label="Mobile No: ">
          <Input  style={{backgroundColor:'#CAF0F8'}}/>
        </Form.Item>
        <Form.Item label="Role: ">
          <Select>
            <Select.Option value="demo">UG</Select.Option>
            <Select.Option value="demo">PG</Select.Option>
            <Select.Option value="demo">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Assigned Batch: ">
          <Select>
            <Select.Option value="demo">A</Select.Option>
            <Select.Option value="demo">B</Select.Option>
            <Select.Option value="demo">C</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item >
          <Button  style={{backgroundColor:'#CAF0F8', marginLeft:100}}>Add Student</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default studentupdation
