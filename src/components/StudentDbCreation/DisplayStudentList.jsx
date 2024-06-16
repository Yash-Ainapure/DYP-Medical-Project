import { useEffect, useState } from "react";
import { fetchStudentsByBatch } from "../../CRUD";
import { useNavigate } from "react-router-dom";

const DisplayStudentList = ({ batchName, onClose }) => {
   const [students, setStudents] = useState([]);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   useEffect(() => {
      let isMounted = true;

      const getStudents = async () => {
         if (!batchName) return;
         setLoading(true);
         const students = await fetchStudentsByBatch(batchName);
         if (isMounted) {
            if (students.length <= 0) {
               alert("No students present");
               onClose();
            } else {
               setStudents(students);
            }
            setLoading(false);
         }
      };

      getStudents();

      return () => {
         isMounted = false;
      };
   }, [batchName, onClose]);

   if (loading) {
      return <div className="fixed inset-0 flex items-center justify-center bg-gray-100">Loading...</div>;
   }

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-xl relative">
            <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 text-3xl">
               &times;
            </button>
            <h1 className="text-xl font-bold mb-4">Students in batch: {batchName}</h1>
            <div>
               <table className="min-w-full table-auto">
                  <thead>
                     <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Roll No</th>
                        <th className="py-3 px-6 text-left">First Name</th>
                        <th className="py-3 px-6 text-left">Last Name</th>
                        <th className="py-3 px-6 text-left">Role</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                     {students.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                           <td className="py-3 px-6 text-left whitespace-nowrap">{item.rollNo}</td>
                           <td className="py-3 px-6 text-left">{item.firstName}</td>
                           <td className="py-3 px-6 text-left">{item.lastName}</td>
                           <td className="py-3 px-6 text-left">{item.role}</td>
                           <td className="py-3 px-6 text-center">
                              <button onClick={(e) => {
                                 e.preventDefault();
                                 console.log(e.currentTarget.value)
                                 navigate('/editstudent', { state: { item: item } });
                                 onClose();
                              }} value={item.rollNo}>
                                 <span className="cursor-pointer text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                 </span>
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

   );
}

export default DisplayStudentList;
