import { useState, useEffect } from "react";
import { getBatchesData, fetchStudentsByBatch } from "../../CRUD";
import Auth from "../../Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const WorkshopGroupCreation = () => {
  const [workshopName, setWorkshopName] = useState("");
  const [workshopDate, setWorkshopDate] = useState("");
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [totalBatches, setTotalBatches] = useState("");
  const [batchArray, setBatchArray] = useState([]);
  const [selectedBatches, setSelectedBatches] = useState([]);
  const [batchLimits, setBatchLimits] = useState({});
  const [students, setStudents] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [alert,showAlert]=useState(false);
  const [checkedBatches, setCheckedBatches] = useState([]);
  const [alertText, setAlertText]=useState("")
  const navigate = useNavigate();
  useEffect(() => {
    if (!Auth()) navigate("/");
  }, []);
  useEffect(()=>{
    if(alert){
      setTimeout(()=>showAlert(false),2000)
    }
  },[alert])
  useEffect(() => {
    const fetchBatches = async () => {
      const batches = await getBatchesData();
      if (batches) {
        setBatchArray(batches);
        setCheckedBatches(batches.map(() => false));
        setSelectedBatches(batches.map(()=>0))
      }
    };
    fetchBatches();
  }, []);

  const fetchStudents = async () => {
    let allStudents = [];
    for (const batch of selectedBatches) {
      const students = await fetchStudentsByBatch(batch);
      const limit = batchLimits[batch] || students.length;
      allStudents = [
        ...allStudents,
        ...students.slice(0, limit).map((student) => ({
          ...student,
          assignedBatch: batch, // Add assignedBatch property to each student
        })),
      ];
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
    const total=selectedBatches.reduce((acc,cur)=>acc+cur)
    if(Number(total)>Number(totalParticipants)){
      showAlert(true)
      setAlertText("Invalid participants, Please check all fields sum")
      return;
    }
    else if(Number(total)==0){
      showAlert(true)
      setAlertText("Cannot accept zero particpants.")
      return;
    }
    if (students.length >= totalParticipants) {
      const group = students.slice(0, totalParticipants);
      console.log("Created Group:", group);
    } else {
      console.error(
        "Not enough students in selected batches to meet the required number of participants."
      );
    }
  };

  const handleStudentCount = (event, index) => {
    let value = (event.target.value).trim();
    if(event.target.value===""){
      value=0;
    }
    const total=selectedBatches.reduce((acc, cur)=>acc+cur,0)
    let newSelectedBatches = [...selectedBatches];
    newSelectedBatches[index] = Number(value);
    setSelectedBatches(newSelectedBatches);
    if((Number(total)>Number(totalParticipants) || Number(value)>Number(totalParticipants))){
      showAlert(true);
      setAlertText("Student count exceeds total participants")      
      // console.log(value+"\t"+totalParticipants+"\t",((Number(total)>Number(totalParticipants))),"\t",newSelectedBatches,"\t",totalParticipants)
      return;
    }


  };

  const handleBatchLimitChange = (event, batch) => {
    const value = event.target.value;
    setBatchLimits({ ...batchLimits, [batch]: parseInt(value, 10) });
  };

  useEffect(() => {
    if (
      workshopName.length > 0 &&
      workshopDate &&
      totalParticipants.length > 0
    ) {
      setShowTable(true);
      console.log(workshopName, workshopDate, totalParticipants);
    } else {
      setShowTable(false);
    }
  }, [workshopName, workshopDate, totalParticipants]);

  // const handleAddStudent = (student) => {
  //   setStudents([...students, student]);
  // };

  const handleRemoveStudent = (student) => {
    setStudents(students.filter((s) => s !== student));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Workshop Group Creation</h3>
      {alert && <div className="animate-slide-in absolute top-10  md:top-20 flex items-center justify-center gap-4 bg-red-500 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faWarning} />
          {alertText}
        </div>}
      <form onSubmit={onCreateGroup}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="workshopName" className="block">
                Name of Workshop
              </label>
              <input
                type="text"
                id="workshopName"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={workshopName}
                onChange={(e) => setWorkshopName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="workshopDate" className="block">
                Date of Workshop
              </label>
              <input
                type="date"
                id="workshopDate"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={workshopDate}
                onChange={(e) => setWorkshopDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-[50%]">
            <div className="flex-1">
              <label htmlFor="totalParticipants" className="block">
                Total Participants
              </label>
              <input
                type="number"
                min="0"
                id="totalParticipants"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={totalParticipants}
                onChange={(e) => setTotalParticipants(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          <div className="text-3xl font-semibold">
            Available Batches List
          </div>
          {true && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[50vh] overflow-scroll">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-blue-300 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Serial No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Batch Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Level
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Specialty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Year
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stu. Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stu. to pick
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {batchArray.map((batch, index) => {
                    return <tr key={index} className="bg-white border-b dark:bg-blue-100  hover:bg-blue-200 text-black">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap "
                    >
                      <input type="checkbox" className="h-[20px] w-[20px] cursor-pointer" checked={checkedBatches[index]} onChange={()=>{
                        
                        const newCheckedBatches=[...checkedBatches]
                        newCheckedBatches[index]=!newCheckedBatches[index]
                        const newSelectedBatches=[...selectedBatches]
                        newSelectedBatches[index]=0;
                        setSelectedBatches(newSelectedBatches)
                        setCheckedBatches(newCheckedBatches)
                      }}/>
                    </th>
                    <td className="px-6 py-4">{batch.batchName}</td>
                    <td className="px-6 py-4">{batch.level}</td>
                    <td className="px-6 py-4">{batch.speciality}</td>
                    <td className="px-6 py-4">{batch.year}</td>
                    <td className="px-6 py-4">{batch.rollList.length}</td>
                    <td className="px-6 py-4 ">
                      <input type="number" value={selectedBatches[index]} onChange={(e)=>handleStudentCount(e,index)} className="p-2"  disabled={!checkedBatches[index]}/>
                    </td>
                  </tr>
                  })}
                </tbody>
              </table>
            </div>
          )}
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
                <li
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <div>{`${student.firstName} ${student.lastName}`}</div>
                  <div className="text-sm text-gray-500">
                    {student.assignedBatch}
                  </div>
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
