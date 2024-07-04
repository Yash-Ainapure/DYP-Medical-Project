import { useEffect, useState } from "react";
import NewStudentValidation from "../ValidationSchemas/AddNewStudentValidation";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Input } from "@material-tailwind/react";
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
      <div className="bg-slate-100 h-screen ... flex items-center justify-center">
         <form className="bg-white p-8 rounded shadow-md w-full max-w-lg">
            <div className="mb-4 text-center">
            <h1 className="text-xl font-bold text-gray-800">Add New Student</h1>
            </div>

            <div >
               <label htmlFor="academic-year" className="block text-gray-700 font-bold ">First Name:</label>
               <input
                  id="batch"
                  placeholder="Enter first name"
                  type="text"
                  name="firstName"
                  className="mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.firstName && touched.firstName ? (
                  <span className="errorMassage font-semibold flex text-red-500">
                     {errors.firstName.charAt(0).toUpperCase() +
                        errors.firstName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold ">Last Name</label>
               <input
                  id="batch"
                  type="text"
                   placeholder="Enter last name"
                  name="lastName"
                  className="mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.lastName && touched.lastName ? (
                  <span className="errorMassage font-semibold flex text-red-500">
                     {errors.lastName.charAt(0).toUpperCase() +
                        errors.lastName.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold ">Roll no.</label>
               <input
                  id="batch"
                  type="text"
                  name="roll"
                  placeholder="Enter roll no."

                  className="mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.roll}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.roll && touched.roll ? (
                  <span className="errorMassage font-semibold flex text-red-500">
                     {errors.roll.charAt(0).toUpperCase() +
                        errors.roll.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold ">Email Address</label>
               <input
                  id="batch"
                  type="text"
                  placeholder="Enter email address"

                  name="email"
                  className="mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.email && touched.email ? (
                  <span className="errorMassage font-semibold flex text-red-500">
                     {errors.email.charAt(0).toUpperCase() +
                        errors.email.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold ">Contact</label>
               <input
                  id="batch"
                  type="text"
                  placeholder="Enter phone no."

                  name="contact"
                  className=" mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.contact && touched.contact ? (
                  <span className="errorMassage font-semibold flex text-red-500">
                     {errors.contact.charAt(0).toUpperCase() +
                        errors.contact.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
               <label htmlFor="academic-year" className="block text-gray-700 font-bold">Role</label>
               <input
                  id="batch"
                  type="text"
                  name="role"
                  placeholder="Enter role"

                  className=" mb-2 bg-blue-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {errors.role && touched.role ? (
                  <span className="errorMassage  font-semibold flex text-red-500">
                     {errors.role.charAt(0).toUpperCase() +
                        errors.role.slice(1)}
                  </span>
               ) : null}
            </div>
            <div>
            <label htmlFor="academic-year" className="block text-gray-700 font-bold ">Batch</label>
               <select
                  name="assignedBatch"
                  className="   mb-2 block appearance-none w-full bg-blue-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  <span className="errorMassage font-semibold text-red-500">
                     {errors.assignedBatch.charAt(0).toUpperCase() +
                        errors.assignedBatch.slice(1)}
                  </span>
               ) : null}
            </div>
            <div className="flex justify-center mt-4">
               <button
                  type="submit"
                  className="bg-gray-900 text-gray-200 py-2 px-4 rounded mr-2 hover:bg-gray-800 focus:outline-none focus:shadow-outline" disabled={loading}
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