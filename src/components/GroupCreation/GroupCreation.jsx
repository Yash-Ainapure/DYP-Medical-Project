import { useState, useEffect } from "react";
import { getBatchesData, fetchStudentsByBatch } from "../../CRUD";

const WorkshopGroupCreation = () => {
  const [workshopName, setWorkshopName] = useState("");
  const [workshopDate, setWorkshopDate] = useState("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [totalBatches, setTotalBatches] = useState("");
  const [batchNames, setBatchNames] = useState([]);
  const [selectedBatches, setSelectedBatches] = useState([]);
  const [batchLimits, setBatchLimits] = useState({});
  const [students, setStudents] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchBatches = async () => {
      const batches = await getBatchesData();
      if (batches) {
        setBatchNames(batches.map(batch => batch.batchName));
      }
    };
    fetchBatches();
  }, []);

  const fetchStudents = async () => {
    let allStudents = [];
    for (const batch of selectedBatches) {
      const students = await fetchStudentsByBatch(batch);
      const limit = batchLimits[batch] || students.length;
      allStudents = [...allStudents, ...students.slice(0, limit).map(student => ({
        ...student,
        assignedBatch: batch // Add assignedBatch property to each student
      }))];
    }
    setStudents(allStudents);
  };

  const onViewStudents = async () => {
    await fetchStudents();
    setIsPopupVisible(true);
  };

  const onCreateGroup = async (e) => {
    e.preventDefault();
    await fetchStudents();
    if (students.length >= totalParticipants) {
      const group = students.slice(0, totalParticipants);
      console.log("Created Group:", group);
    } else {
      console.error("Not enough students in selected batches to meet the required number of participants.");
    }
  };

  const handleBatchChange = (event, index) => {
    const value = event.target.value;
    const newSelectedBatches = [...selectedBatches];
    newSelectedBatches[index] = value;
    setSelectedBatches(newSelectedBatches);
  };

  const handleBatchLimitChange = (event, batch) => {
    const value = event.target.value;
    setBatchLimits({ ...batchLimits, [batch]: parseInt(value, 10) });
  };

  // const handleAddStudent = (student) => {
  //   setStudents([...students, student]);
  // };

  const handleRemoveStudent = (student) => {
    setStudents(students.filter(s => s !== student));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Workshop Group Creation</h3>
      <form onSubmit={onCreateGroup}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="workshopName" className="block">Name of Workshop</label>
              <input
                type="text"
                id="workshopName"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={workshopName}
                onChange={(e) => setWorkshopName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="workshopDate" className="block">Date of Workshop</label>
              <input
                type="date"
                id="workshopDate"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={workshopDate}
                onChange={(e) => setWorkshopDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="totalParticipants" className="block">Total Participants</label>
              <input
                type="number"
                min="0"
                id="totalParticipants"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={totalParticipants}
                onChange={(e) => setTotalParticipants(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="totalBatches" className="block">Total Number of Batches</label>
              <input
                type="number"
                min="0"
                id="totalBatches"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={totalBatches}
                onChange={(e) => setTotalBatches(e.target.value)}
              />
            </div>
          </div>
          {Array.from({ length: totalBatches }, (_, index) => (
            <div key={index} className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor={`batchName-${index}`} className="block">Batch {index + 1}</label>
                <select
                  id={`batchName-${index}`}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={selectedBatches[index] || ""}
                  onChange={(e) => handleBatchChange(e, index)}
                >
                  <option value="">Select Batch</option>
                  {batchNames.map((name, idx) => (
                    <option key={idx} value={name}>{name}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor={`batchLimit-${index}`} className="block">Limit</label>
                <input
                  type="number"
                  min="0"
                  id={`batchLimit-${index}`}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={batchLimits[selectedBatches[index]] || ""}
                  onChange={(e) => handleBatchLimitChange(e, selectedBatches[index])}
                  disabled={!selectedBatches[index]}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onViewStudents}
            >
              View
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Addition
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Replace/Deletion
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              Create Group
            </button>
          </div>
        </div>
      </form>

      {isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Selected Students</h3>
            <ul className="overflow-y-auto max-h-96">
              {students.map((student, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <div>{`${student.firstName} ${student.lastName}`}</div>
                  <div className="text-sm text-gray-500">{student.assignedBatch}</div>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleRemoveStudent(student)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopGroupCreation;
