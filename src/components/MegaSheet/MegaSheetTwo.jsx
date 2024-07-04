import { Button, Form, InputNumber, Col, Row, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from '../../Auth';

const MegaSheetTwo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth()) navigate("/");
  }, [navigate]);

  return (
    <div className="container mx-auto  mt-10 px-20 pb-10 ">
      <h1 className="text-2xl font-bold text-center mb-8">Mega sheet entry part - II</h1>
      <Row gutter={16} className="mx-10">
        <Col span={8}>
          <Form layout="vertical">
            <Form.Item label="Out of Participants:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="UG:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="PG:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Interns:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Fellowship:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Faculty:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="BSc Nursing:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="MSc Nursing:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="No. of Beneficiaries:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="No. of Workshop Days:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Form layout="vertical">
            <Form.Item label="MSc Nursing Faculty:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Nursing Staff/Attendance:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Physiotherapy Students:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Physiotherapy Faculty:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Pharmacy:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="External Beneficiaries:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="% of Beneficiaries:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="No. of workshops:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="No. of Beneficiaries:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="No. of Workshop Days:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Form layout="vertical">
            <Form.Item label="Department:">
              <Select style={{ width: '100%' }}>
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
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Task Trainer:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Laparoscopy:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Lucina:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Anatomage:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Vimedix:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Laparoscopy:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Luna:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Endoscopy:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Blue Phantom:">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="flex justify-end mt-8">
        <Button type="primary" onClick={() => navigate("/dashboard/megasheet1")}>Previous</Button>
        <Button style={{ marginLeft: 10 }}>Save</Button>
      </div>
    </div>
  );
};

export default MegaSheetTwo;
