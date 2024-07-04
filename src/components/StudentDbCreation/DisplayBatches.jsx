import { useEffect, useState } from "react";
import { getBatchesData } from "../../CRUD";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

const DisplayBatches = ({ handleButtonClick }) => {
  const [batches, setBatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth()) navigate("/");
  }, [navigate]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await getBatchesData();
        if (data !== undefined) {
          setBatches(data);
        }
      } catch (error) {
        console.log("Error in getting data:", error);
      }
    };

    fetchBatches();
  }, []);

  if (batches === null || batches === undefined || batches.length === 0) {
    return <div>Loading Batches...</div>;
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Display Batches</h1>
          <button
            onClick={() => navigate("/dashboard/studentdb")}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Add new Batch
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
              style={{ height: "100%" }}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {batch.batchName}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-600">
                      <strong>Speciality:</strong> {batch.speciality}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Delete operation not implemented yet.");
                      }}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                  <p className="text-gray-600">
                    <strong>Level:</strong> {batch.level}
                  </p>
                  <p className="text-gray-600">
                    <strong>Academic Year:</strong> {batch.academicYear}
                  </p>
                  <p className="text-gray-600">
                    <strong>Document:</strong>{" "}
                    <a
                      href={batch.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View Document
                    </a>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleButtonClick(batch.batchName)}
                className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4  focus:outline-none"
              >
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                View Students
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayBatches;
