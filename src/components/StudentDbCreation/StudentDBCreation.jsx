import { useNavigate } from 'react-router-dom'
import './StudentDBCreation.css'
import { useFormik } from 'formik';
import FilePreview from '../SubComponenets/FilePreview'
import StudentDBCreationValidation from '../ValidationSchemas/StudentDBCreeationValidation'
import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { processData, setBatchData } from '../../CRUD';

const StudentDBCreation = () => {
  const navigate = useNavigate();
  const documentRef = useRef();
  const [documentUrl, setDocumentUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataFile, setDataFile] = useState();
  const [arrayBuffer, setArrayBuffer] = useState(null);


  const uploadData = (file, batchName) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      processData(json, batchName);
    };
    reader.onerror = (error) => {
      console.error('FileReader error:', error);
    };
    reader.readAsArrayBuffer(file);
  };


  const formValues = {
    batchName: "",
    speciality: "",
    level: "",
    academicYear: "",
    documentUrl: null,
    document: null,
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: formValues,
    validationSchema: StudentDBCreationValidation,
    onSubmit: (values) => {
      setLoading(true);
      console.log("called it success");

      //upload excel student data in db
      uploadData(dataFile, values.batchName);


      let documentUrl = "";
      //removed document url form the object
      const filteredFormValues = Object.keys(values).reduce((acc, key) => {
        if (key !== 'documentUrl') {
          acc[key] = values[key];
        } else {
          documentUrl = values[key];
        }
        return acc;
      }, {});
      //updating the document to only its name
      let value = { ...filteredFormValues, document: values.document.name };
      setBatchData(value, dataFile,arrayBuffer).then(() => {
        setLoading(false);
        resetForm();
        alert("batch created successfully");
      }).catch((error) => {
        console.log("error in saving data: " + error);
        resetForm();
        setLoading(false);
      })
    },
  });


  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="mb-4 text-center">
          <label htmlFor="batch" className="block text-gray-700 font-bold mb-2">Create a batch:</label>
          <input
            id="batch"
            type="text"
            name="batchName"
            className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={values.batchName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.batchName && touched.batchName ? (
            <span className="errorMassage flex text-red-500">
              {errors.batchName.charAt(0).toUpperCase() +
                errors.batchName.slice(1)}
            </span>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="speciality" className="block text-gray-700 font-bold mb-2">Speciality:</label>
          <select
            id="speciality"
            className="block appearance-none w-full bg-blue-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={values.speciality}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value={null}>Select</option>
            <option value="medical">Medical</option>
            <option value="nursing">Nursing</option>
            <option value="physiotherapy">Physiotherapy</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
          {errors.speciality && touched.speciality ? (
            <span className="errorMassage text-red-500">
              {errors.speciality.charAt(0).toUpperCase() +
                errors.speciality.slice(1)}
            </span>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="level" className="block text-gray-700 font-bold mb-2">Level:</label>
          <select
            id="level"
            className="block appearance-none w-full bg-blue-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={values.level}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value={null}>Select</option>
            <option value="ug">UG</option>
            <option value="pg">PG</option>
            <option value="intern">Intern</option>
          </select>
          {errors.level && touched.level ? (
            <span className="errorMassage text-red-500">
              {errors.level.charAt(0).toUpperCase() +
                errors.level.slice(1)}
            </span>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Academic Year:</label>
          <input
            value={values.academicYear}
            onChange={handleChange}
            onBlur={handleBlur}
            name="academicYear"
            id="academic-year"
            className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.academicYear && touched.academicYear ? (
            <span className="errorMassage text-red-500">
              {errors.academicYear.charAt(0).toUpperCase() +
                errors.academicYear.slice(1)}
            </span>
          ) : null}
        </div>
        {/* Upload Document */}
        <div className="startupProfile-input-box">
          <div className="addCompany-image flex justify-start gap-2">
            {values.documentUrl === null ? (
              <span>Upload Document</span>
            ) : (
              <FilePreview documentUrl={documentUrl} value={values} setFieldValue={setFieldValue} />
            )}

            <input
              ref={documentRef}
              hidden
              type="file"
              accept=".xlsx, .xls"
              onChange={(event) => {
                handleChange(event);
                const file = event.target.files[0];
                setDataFile(file);

                setFieldValue("document", file);
                const reader = new FileReader();

                reader.readAsArrayBuffer(file);
                reader.onload = () => {
                  setArrayBuffer(reader.result);
                  setFieldValue("document", file);
                  setFieldValue("documentUrl", reader.result);
                };


                // reader.readAsDataURL(file);
                // reader.onload = () => {
                //   setDocumentUrl(reader.result);
                //   setFieldValue("documentUrl", reader.result);
                // };
              }}
              name='documentUrl'
            />
            {values.documentUrl === null ? (
              <div>
                <i
                  className="fa-solid fa-arrow-up-from-bracket"
                  onClick={() => {
                    documentRef.current.value = null;
                    documentRef.current.click();
                  }}
                ></i>
              </div>
            ) : null}
          </div>
          {errors.documentUrl && touched.documentUrl ? (
            <span className="errorMassage text-red-500">
              {errors.documentUrl.charAt(0).toUpperCase() +
                errors.documentUrl.slice(1)}
            </span>
          ) : null}
        </div>
        <div>
          <p className='mt-6 text-red-500'>The xml file updates the students accordingly so upload it as per the below format</p>
          <a href="https://firebasestorage.googleapis.com/v0/b/dypmedicalproject.appspot.com/o/documents%2FdemoFile.xlsx?alt=media&token=4a00ebe9-1a5c-4c05-b8fa-af33c3a309d4">Download File</a>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-100 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-blue-200 focus:outline-none focus:shadow-outline" disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Saving Data..." : "Create a batch"}
          </button>
          {/* <button
            onClick={() => {
              navigate('/')
            }} className="bg-blue-100 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-blue-200 focus:outline-none focus:shadow-outline"
          >
            Next
          </button> */}
          <button
            onClick={() => {
              navigate('/dashboard/studentupdation')
            }} className="bg-blue-100 text-gray-700 py-2 px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline"
          >
            Student updation
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentDBCreation
