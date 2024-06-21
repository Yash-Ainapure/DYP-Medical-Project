import { useEffect, useState } from "react";
import NewStudentValidation from "../ValidationSchemas/AddNewStudentValidation";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addnewStudent, fetchBatchNames } from "../../CRUD";
import { addRollList } from "../../CRUD2";
import Auth from "../../Auth";
const AddNewStudent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!Auth())navigate("/")
  },[])
   const [loading, setLoading] = useState(false);
   const [batchNames, setBatchNames] = useState([]);

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
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      role: "",
      assignedBatch: "",
      roll: "",
   };

   const {
      values,
      errors,
      touched,
      handleSubmit,
      handleChange,
      handleBlur,
      resetForm,
   } = useFormik({
      initialValues: formValues,
      validationSchema: NewStudentValidation,
      onSubmit:async (values) => {
         setLoading(true);
         addnewStudent(values).then(() => {
            setLoading(false);
            resetForm();
         }).catch((error) => {
            console.log("error adding student data" + error)
            setLoading(false);
         })

      },
   });

   return (
      <div className="bg-blue-500 min-h-screen flex items-center justify-center">
         <form className="bg-white p-8 rounded shadow-md w-full max-w-lg">
            <div className="mb-4 text-center">
               <label htmlFor="batch" className="block text-gray-700 font-bold mb-2">Add new Student:</label>
            </div>

            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">First Name:</label>
               <input
                  id="batch"
                  type="text"
                  name="firstName"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.firstName && touched.firstName ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.firstName.charAt(0).toUpperCase() +
                        errors.firstName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Last Name</label>
               <input
                  id="batch"
                  type="text"
                  name="lastName"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.lastName && touched.lastName ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.lastName.charAt(0).toUpperCase() +
                        errors.lastName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Roll no.</label>
               <input
                  id="batch"
                  type="text"
                  name="roll"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.roll}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.roll && touched.roll ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.roll.charAt(0).toUpperCase() +
                        errors.roll.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Email Address</label>
               <input
                  id="batch"
                  type="text"
                  name="email"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.email && touched.email ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.email.charAt(0).toUpperCase() +
                        errors.email.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Contact</label>
               <input
                  id="batch"
                  type="text"
                  name="contact"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.contact && touched.contact ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.contact.charAt(0).toUpperCase() +
                        errors.contact.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold mb-2">Role</label>
               <input
                  id="batch"
                  type="text"
                  name="role"
                  className="bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.role && touched.role ? (
                  <span className="errorMassage flex text-red-500">
                     {errors.role.charAt(0).toUpperCase() +
                        errors.role.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <select
                  name="assignedBatch"
                  className=" mt-6 block appearance-none w-full bg-blue-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={values.assignedBatch}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <option value={null}>select batch</option>
                  {batchNames.map((batchName, index) => (
                     <option key={index} value={batchName}>
                        {batchName}
                     </option>
                  ))}
               </select>
               {errors.assignedBatch && touched.assignedBatch ? (
                  <span className="errorMassage text-red-500">
                     {errors.assignedBatch.charAt(0).toUpperCase() +
                        errors.assignedBatch.slice(1)}
                  </span>
               ) : null}
            </div>
            <div className="flex justify-center mt-4">
               <button
                  type="submit"
                  className="bg-blue-100 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-blue-200 focus:outline-none focus:shadow-outline" disabled={loading}
                  onClick={handleSubmit}
               >
                  {loading ? "Adding student..." : "Add student"}
               </button>
            </div>
         </form>
      </div>
   )
}

export default AddNewStudent