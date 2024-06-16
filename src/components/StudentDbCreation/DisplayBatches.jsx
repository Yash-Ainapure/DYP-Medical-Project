import { useEffect, useState } from "react";
import { fetchStudentsByBatch, getBatchesData } from "../../CRUD";
import { useNavigate } from "react-router-dom";

const DisplayBatches = ({ handleButtonClick }) => {
   const [batches, setBatches] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchBatches = async () => {

         try {
            const data = await getBatchesData();
            if (data !== undefined) {
               setBatches(data);
            }
         } catch (error) {
            console.log("error in getting data : " + error)
         }
      };

      fetchBatches();
   }, []);
   if (batches === null || batches === undefined || batches.length === 0) {
      return (
         <div>Loading Batches...</div>
      );
   }

   return (
      <div className="p-1">
         <div className="text-center py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <h1 className="text-3xl font-bold mb-1">Batches</h1>
         </div>
         <div className="p-4">
            <div className="flex justify-end pr-4">
               <button onClick={(e) => {
                  e.preventDefault();
                  navigate('/dashboard/studentdb');
               }} className="bg-blue-500 p-2 rounded-md text-white">Add new Batch</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {batches.map((batch) => (
                  <div key={batch.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                     <div className="p-6">
                        <div className="flex items-center justify-between">
                           <h2 className="text-xl font-bold text-gray-800">{batch.batchName}</h2>
                           <button
                              onClick={(e) => {
                                 e.preventDefault();
                                 alert("Delete operation not implemented yet.");
                              }}
                              className="text-red-500 hover:text-red-700 focus:outline-none"
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                 <path d="M3 6h18v2H3V6zm2 3h14v13c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9zm5 3v7h2v-7H8zm4 0v7h2v-7h-2zM10 2h4v2h-4zM6 2h2v2H6zM16 2h2v2h-2z" />
                              </svg>
                           </button>
                        </div>
                        <p className="text-gray-600 mt-2"><strong>Speciality:</strong> {batch.speciality}</p>
                        <p className="text-gray-600"><strong>Level:</strong> {batch.level}</p>
                        <p className="text-gray-600"><strong>Academic Year:</strong> {batch.academicYear}</p>
                        <p className="text-gray-600"><strong>Document:</strong> <a href={batch.documentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Document</a></p>
                        <button
                           onClick={(e) => {
                              e.preventDefault();
                              handleButtonClick(batch.batchName);
                           }}
                           className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none"
                        >
                           View Students
                        </button>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   )
}

export default DisplayBatches