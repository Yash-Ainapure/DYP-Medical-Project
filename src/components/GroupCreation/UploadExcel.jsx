import { useState } from 'react';
import * as XLSX from 'xlsx';
import { ref, set } from 'firebase/database';
import { database } from '../../firebase';

const UploadExcel = ({ assignedBatch }) => {
   const [file, setFile] = useState(null);

   const handleFile = (e) => {
      const file = e.target.files[0];
      setFile(file);
   };

   const uploadData = () => {
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
         alert("error uploading file...")
         console.error('FileReader error:', error);
      };
      reader.readAsArrayBuffer(file);
   };

   const processData = (data) => {
      const headers = data[0];
      const rows = data.slice(1);
      rows.forEach(row => {
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
      <div>
         <input type="file" onChange={handleFile} />
         <button onClick={uploadData}>Upload</button>
      </div>
   );
};

export default UploadExcel;