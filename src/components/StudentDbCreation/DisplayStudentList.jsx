import { useEffect, useState } from "react";
import { fetchStudentsByBatch } from "../../CRUD";

const DisplayStudentList = ({ batchName, onClose }) => {
   const [students, setStudents] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let isMounted = true; // track if the component is still mounted

      const getStudents = async () => {
         if (!batchName) return; // prevent running if batchName is not provided
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
         isMounted = false; // cleanup function to set isMounted to false
      };
   }, [batchName, onClose]);

   if (loading) {
      return <div className="fixed inset-0 flex items-center justify-center bg-gray-100">Loading...</div>;
   }

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
            <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 text-3xl">
               &times;
            </button>
            <h1 className="text-xl font-bold mb-4">Students in batch: {batchName}</h1>
            <ol className="pl-5">
               {students.map(student => (
                  <li key={student.rollNo} className="mb-2">
                     {student.rollNo}: {student.firstName} {student.lastName}
                  </li>
               ))}
            </ol>
         </div>
      </div>
   );
}

export default DisplayStudentList;
