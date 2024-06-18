import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewStudentValidation from "../ValidationSchemas/AddNewStudentValidation";
import { deleteStudent, editStudent, fetchBatchNames } from "../../CRUD";

const EditStudentInfo = ({ onClose }) => {
   const location = useLocation();
   const { item } = location.state || {};
   const [loading, setLoading] = useState(false);
   const [batchNames, setBatchNames] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      fetchBatchNames()
         .then((batchNames) => {
            setBatchNames(batchNames);
         })
         .catch((error) => {
            console.error("Failed to fetch batch names:", error);
         });

   }, []);
   const formValues = {
      firstName: item.firstName,
      lastName: item.lastName,
      contact: item.contact,
      email: item.email,
      role: item.role,
      assignedBatch: item.assignedBatch,
      roll: item.rollNo,
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
      validationSchema: NewStudentValidation,
      onSubmit: (values) => {
         setLoading(true);
         editStudent(values).then(() => {
            setLoading(false);
            resetForm();
            alert("student updated successfully");
            navigate(-1)
         }).catch((error) => {
            console.log("error adding student data" + error)
            setLoading(false);
         })

      },
   });

   const handleDelete = () => {
      // Assuming you have a function to delete a student by ID
      setLoading(true);
      deleteStudent(item) // replace `item.id` with the appropriate identifier
         .then(() => {
            alert('Student deleted successfully');
            navigate(-1); // Redirect after deletion
         })
         .catch(error => {
            console.error('Failed to delete student:', error);
            setLoading(false);
         });
   };

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <form className="bg-white p-6 rounded shadow-md w-full max-w-lg relative" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2 text-center">
               <label htmlFor="batch" className="block text-gray-700 font-bold mb-1">Add new Student:</label>
            </div>

            <div>
               <label htmlFor="firstName" className="block text-gray-700 font-bold mb-1">First Name:</label>
               <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.firstName && touched.firstName ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.firstName.charAt(0).toUpperCase() + errors.firstName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="lastName" className="block text-gray-700 font-bold mb-1">Last Name</label>
               <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.lastName && touched.lastName ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.lastName.charAt(0).toUpperCase() + errors.lastName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="roll" className="block text-gray-700 font-bold mb-1">Roll no.</label>
               <input
                  id="roll"
                  type="text"
                  name="roll"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.roll}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.roll && touched.roll ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.roll.charAt(0).toUpperCase() + errors.roll.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email Address</label>
               <input
                  id="email"
                  type="text"
                  name="email"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.email && touched.email ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.email.charAt(0).toUpperCase() + errors.email.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="contact" className="block text-gray-700 font-bold mb-1">Contact</label>
               <input
                  id="contact"
                  type="text"
                  name="contact"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.contact && touched.contact ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.contact.charAt(0).toUpperCase() + errors.contact.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="role" className="block text-gray-700 font-bold mb-1">Role</label>
               <input
                  id="role"
                  type="text"
                  name="role"
                  className="bg-blue-100 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.role && touched.role ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.role.charAt(0).toUpperCase() + errors.role.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <select
                  name="assignedBatch"
                  className="mt-4 block appearance-none w-full bg-blue-100 border border-gray-300 text-gray-700 py-1 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={values.assignedBatch}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <option value={null}>Select batch</option>
                  {batchNames.map((batchName, index) => (
                     <option key={index} value={batchName}>
                        {batchName}
                     </option>
                  ))}
               </select>
               {errors.assignedBatch && touched.assignedBatch ? (
                  <span className="errorMassage text-red-500">
                     {errors.assignedBatch.charAt(0).toUpperCase() + errors.assignedBatch.slice(1)}
                  </span>
               ) : null}
            </div>
            <div className="flex justify-center">
               <div className="flex justify-center mt-4">
                  <button
                     type="submit"
                     className="bg-blue-100 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-blue-200 focus:outline-none focus:shadow-outline"
                     disabled={loading}
                     onClick={handleSubmit}
                  >
                     {loading ? "Updating student..." : "Update student"}
                  </button>
               </div>
               <div className="flex justify-center mt-4">
                  <button
                     type="submit"
                     className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-200 hover:text-black focus:outline-none focus:shadow-outline"
                     disabled={loading}
                     onClick={() => {
                        if (window.confirm('Are you sure you want to delete this student?')) {
                           handleDelete(values.roll);
                        }
                     }}
                  >
                     {loading ? "Deleting student..." : "Delete student"}
                  </button>
               </div>
            </div>
            <button
               type="button"
               className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 text-3xl"
               onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
               }}
            >
               &times;
            </button>
         </form>
      </div>

   )
}

export default EditStudentInfo