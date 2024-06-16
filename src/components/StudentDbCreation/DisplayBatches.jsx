import { useEffect, useState } from "react";
import { getBatchesData } from "../../CRUD";
import { useNavigate } from "react-router-dom";

const DisplayBatches = () => {
   const [batches, setBatches] = useState([]);
   const navigate=useNavigate();

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
      <div className="p-4">
         <h1 className="text-2xl font-semibold mb-4 flex justify-center underline">Batches</h1>
         <div className="p-4">
            <div className="flex justify-end pr-4">
               <button onClick={(e)=>{
                  e.preventDefault();
                  navigate('/dashboard/studentdb');
               }} className="bg-blue-500 p-1 rounded-sm text-white">Add new Batch</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {batches.map((batch) => (
                  <div key={batch.id} className="bg-white shadow-md rounded-lg p-4">
                     <h2 className="text-lg font-semibold">{batch.batchName}</h2>
                     <p><strong>Speciality:</strong> {batch.speciality}</p>
                     <p><strong>Level:</strong> {batch.level}</p>
                     <p><strong>Academic Year:</strong> {batch.academicYear}</p>
                     <p><strong>Document:</strong> <a href={batch.documentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Document</a></p>
                     <button onClick={(e) => {
                        e.preventDefault();
                     }} className=" mt-2 bg-blue-500 rounded-sm p-1 text-white">View Students</button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default DisplayBatches