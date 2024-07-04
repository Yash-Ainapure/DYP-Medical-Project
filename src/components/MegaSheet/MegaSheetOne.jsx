import { Button, Form, InputNumber, Input, Select, DatePicker, Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import Auth from '../../Auth';
import { useEffect } from 'react';

const MegaSheetOne = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth()) navigate("/");
  }, [navigate]);

  return (
    <div className='container mx-auto mt-10 px-20 pb-10'>
      <h1 className='text-2xl font-bold text-center mb-8'>Mega sheet entry part - I</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Title of workshop:">
              <Input placeholder="Enter workshop title" />
            </Form.Item>
            <Form.Item label="Nature of workshop:">
              <Select placeholder="Select nature">
                <Select.Option value="Student training">Student training</Select.Option>
                <Select.Option value="FDP">FDP</Select.Option>
                <Select.Option value="Consultancy-paid">Consultancy-paid</Select.Option>
                <Select.Option value="Unpaid">Unpaid</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date:">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Report Number:">
              <InputNumber placeholder="Enter report number" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Name Of Trainer:">
              <Input placeholder="Enter trainer's name" />
            </Form.Item>
            <Form.Item label="Beneficiaries:">
              <Input placeholder="Enter beneficiaries" />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Type of workshop:">
              <Select placeholder="Select type">
                <Select.Option value="Student training">Student training</Select.Option>
                <Select.Option value="FDP">FDP</Select.Option>
                <Select.Option value="Consultancy-paid">Consultancy-paid</Select.Option>
                <Select.Option value="Unpaid">Unpaid</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Department:">
              <Select placeholder="Select department">
                <Select.Option value="Anesthesiology">Anesthesiology</Select.Option>
                <Select.Option value="Dermatology">Dermatology</Select.Option>
                {/* Add other departments as needed */}
              </Select>
            </Form.Item>
            <Form.Item label="Institution of trainer:">
              <Select placeholder="Select institution">
                <Select.Option value="Internal">Internal</Select.Option>
                <Select.Option value="External">External</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="flex justify-end mt-8">
        <Button type="primary" onClick={() => navigate("/dashboard/megasheet2")}>Next</Button>
      </div>
    </div>
  );
};

export default MegaSheetOne;
