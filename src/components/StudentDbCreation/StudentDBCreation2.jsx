import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import { processData, setBatchData } from "../../CRUD";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import { addOneBatch, addOneStudent } from "../../CRUD2";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";
import { useEffect } from "react";
function StudentDBCreation2() {
  const [fileName, setFileName] = useState("No File");
  const [progress, showProgress] = useState(false);
  const [speciality, setSpeciality] = useState("");
  const [batchName, setBatchName] = useState("");
  const [level, setLevel] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);
  const [warning, setWarning] = useState(false);
  const [xmlData, setXmlData] = useState([]);
  const [progressCount, setProgressCount] = useState(30);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Auth()) navigate("/");
  }, []);
  async function readXMLFile(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        setFileName(sheetName);
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });
        // setXmlData(jsonData)
        // console.log(jsonData);
        addXmlDataToDB(jsonData);
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.log("No file selected");
    }
  }

  const timer = ms => new Promise(res => setTimeout(res, ms))
  async function addXmlDataToDB(jsonData) {
    setXmlData(jsonData);
    let rollList = [];
    console.log(jsonData);
    showProgress(true);
    for (let i = 1; i < jsonData.length; i++) {
      setProgressCount((i / jsonData.length) * 100);
      // console.log(progressCount);
      let student = {};
      const rollNo = jsonData[i][0];
      rollList.push({ rollNo: rollNo, inGroup: false });
      student["assignedBatch"] = batchName;
      student["firstName"] = jsonData[i][1];
      student["lastName"] = jsonData[i][2];
      student["email"] = jsonData[i][3];
      student["contact"] = jsonData[i][4];
      student["role"] = jsonData[i][5];
      let stat=await addOneStudent(rollNo, student)
      // console.log((i/jsonData.length)+"  "+i+"    "+((i / jsonData.length) * 100))
      // await timer(1000)
    }
    if (rollList.length == 0) {
    showProgress(false)

      console.log("No students to add");
      alert("No students to add. Check the file and try again.");
      return;
    }
    const batchId = (batchName.trim().toLowerCase() + year.trim()).replaceAll(
      " ",
      ""
    );
    setProgressCount(99)
    const status2=await addOneBatch(batchId, {year, batchName, level, speciality, rollList})
    if (!status2) {
    showProgress(false)

      alert("Error adding batch");
      console.log("Error adding batch");
      return;
    }
    showProgress(false)
    setModal(true);
  }
  async function handleForm() {
    const numCheck = new RegExp("^[20].[0-9]{2}$", "gm");
    if (
      speciality == "" ||
      batchName == "" ||
      level == "" ||
      year == "" ||
      file == null ||
      !numCheck.test(year)
    ) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
        return;
      }, 3000);
    }
    await readXMLFile(file);
  }
  const closeModal = () => setModal(false);

  return (     <div className=" tems-center m-4">
          <h1 className="text-2xl text-center font-bold text-gray-800">Create Batches</h1>
    <div className="w-full h-full flex justify-center mt-5 md:mt-0 p-4 md:p-0 md:items-center">
      
      {modal && (
        <Modal
          navigate={navigate}
          cancleEvent={closeModal}
          length={xmlData.length - 1}
          batchName={batchName}
        />
      )}
      <div className="form w-full md:mx-4 md:w-[60vw] relative">
        {warning && (
          <div className="animate-slide-in absolute top-0 left-[40%] flex items-center justify-center gap-4 bg-red-500 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faWarning} />
            {"Please fill all fields properly!"}
          </div>
        )}
        {progress && (
          <ProgressBar progressCount={progressCount} fileName={fileName} />
        )}
        <div className="mb-4">
          <label
            htmlFor="batchName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Batch Name:
          </label>
          <input
            type="text"
            id="batchName"
            onChange={(e) => setBatchName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="speciality"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Speciality:
          </label>
          <select
            id="speciality"
            onChange={(e) => setSpeciality(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={null}>Select</option>
            <option value="medical">Medical</option>
            <option value="nursing">Nursing</option>
            <option value="physiotherapy">Physiotherapy</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="level"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Level:
          </label>
          <select
            id="level"
            onChange={(e) => setLevel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={null}>Select</option>
            <option value="ug">UG</option>
            <option value="pg">PG</option>
            <option value="intern">Intern</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="academicYear"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Academic Year:
          </label>
          <input
            type="text"
            id="academicYear"
            onChange={(e) => setYear(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="xmlFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            XML File:
          </label>
          <input
            type="file"
            id="xmlFile"
            accept=".xlsx, .xls"
            onChange={(e) => setFile(e.target.files[0])}
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <div className="mb-4">
          <p className="text-red-500 text-sm font-bold mb-2">
            The xml file updates the students accordingly so upload it as per
            the below format
          </p>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/dypmedicalproject.appspot.com/o/documents%2FdemoFile.xlsx?alt=media&token=4a00ebe9-1a5c-4c05-b8fa-af33c3a309d4"
            style={{ textDecoration: "none", color: "white" }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download XML File
          </a>
        </div>
        <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleForm}
          >
            Create
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

function Modal({ navigate, cancleEvent, length, batchName }) {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10">
      <div
        className="  animate-slide-in bg-green-100 border-green-900 rounded-xl shadow-xl p-4"
        style={{
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <div className=" text-center p-3 flex-auto justify-center ">
          <ThumbUpAltOutlined
            className="text-bold text-green-500"
            style={{ fontSize: "95px" }}
          />
          <h2 className="text-xl font-bold py-4 text-green-800">
            Batch added successfully!
          </h2>
          <p className="font-bold text-sm text-black px-2">
            {length} records added to the batch {batchName}
          </p>
        </div>
        <div className="p-2 mt-2 text-center space-x-1 md:block">
          <button
            className="bg-green-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-500 hover:border-green-500 text-white hover:text-green-500 rounded-full transition ease-in duration-300"
            onClick={() => {
              navigate("/dashboard/displaybatches");
            }}
          >
            View batches
          </button>
          <button
            className="bg-green-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-500 hover:border-green-500 text-white hover:text-green-500 rounded-full transition ease-in duration-300"
            onClick={cancleEvent}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ progressCount, fileName }) {
  const [text, setText] = useState("File: " + fileName + " extracting data..");
  // console.log(fileName);
  // console.log(progressCount);
  useEffect(() => {
    if (progressCount > 40) {
      setText("Creating Batch from " + fileName);
    }
    if (progressCount > 60) {
      setText("Uploading batch data");
    }
  }, [progressCount]);
  return (
    <div className="max-w-sm mx-auto bg-white mt-20 shadow-md rounded-lg overflow-hidden">
      <div className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-zinc-900  text-lg">Creating new Batch</h3>
        <svg
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-zinc-900 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <div className="px-5 pb-5">
        <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">{text}</p>
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
          <div
            style={{
              width: "" + progressCount + "%  ",
            }}
            className="bg-blue-600 h-2.5 rounded-full"
          ></div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {progressCount}% Complete
          </span>
        </div>
      </div>
    </div>
  );
}
export default StudentDBCreation2;
