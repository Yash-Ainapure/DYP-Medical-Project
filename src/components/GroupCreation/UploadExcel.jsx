import { useState } from 'react';
import * as XLSX from 'xlsx';
import { ref, set } from 'firebase/database';
import { database } from '../../firebase';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadExcel = ({ assignedBatch }) => {
  const [file, setFile] = useState(null);

  const handleFile = (info) => {
    const file = info.file.originFileObj;
    setFile(file);
  };

  const uploadData = () => {
    if (!file) {
      message.error('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        processData(json);
      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };
    reader.onerror = (error) => {
      message.error('Error uploading file.');
      console.error('FileReader error:', error);
    };
    reader.readAsArrayBuffer(file);
  };

  const processData = (data) => {
    const headers = data[0];
    const rows = data.slice(1);
    rows.forEach((row) => {
      const student = {};
      headers.forEach((header, index) => {
        student[header] = row[index];
      });
      student.assignedBatch = assignedBatch;
      const studentRef = ref(database, 'studentlist2/' + student.RollNo);
      set(studentRef, student)
        .then(() => {
          console.log('Data uploaded successfully:', student);
        })
        .catch((error) => {
          console.error('Error uploading data:', error);
        });
    });
  };

  return (
    <div className="container mx-auto mt-8 ">
      <Upload
        onChange={handleFile}
        showUploadList={false}
        beforeUpload={() => false}
        accept=".xls, .xlsx"
      >
        <Button icon={<UploadOutlined />}>Select Excel File</Button>
      </Upload>
      <Button type="primary" onClick={uploadData} className="ml-4">
        Upload
      </Button>
    </div>
  );
};

export default UploadExcel;
