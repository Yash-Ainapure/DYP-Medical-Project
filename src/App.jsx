import './App.css'
import Login from './components/LoginSignup/Login'
import Footer from './components/SubComponenets/Footer'
import WorkshopReport from './components/WorkshopReport/WorkshopReport';
import MegaSheetOne from './components/MegaSheet/MegaSheetOne';
import MegaSheetTwo from './components/MegaSheet/MegaSheetTwo';
import MarkAttendance from './components/MarkAttandance/MarkAttendance';
import GroupCreation from './components/GroupCreation/GroupCreation';
import Dashboard from './components/attributes/Dashboard';
import StudentUpdate from './components/StudentDbCreation/studentupdation'
import WorkshopDetail from './components/WorkShopDetail/WorkshopDetail';
import StudentDBCreation from './components/StudentDbCreation/StudentDBCreation';
import StudentDBCreation2 from './components/StudentDbCreation/StudentDBCreation2';
import Register from './components/attributes/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayBatches from './components/StudentDbCreation/DisplayBatches';
import AddNewStudent from './components/StudentDbCreation/AddNewStudent';
import { useState } from 'react';
import DisplayStudentList from './components/StudentDbCreation/DisplayStudentList';
import EditStudentInfo from './components/StudentDbCreation/EditStudentInfo';
import "./App.css";
import Event from "./components/Events";

function App() {
  const [showStudentList, setShowStudentList] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState("");

  const handleButtonClick = async (batchName) => {
    setSelectedBatch(batchName);
    setShowStudentList(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} errorElement={<div>page not found</div>}>
            <Route
              path="displaybatches"
              element={<DisplayBatches handleButtonClick={handleButtonClick} />}
            />
            <Route path="newstudent" element={<AddNewStudent />} />
            <Route path="studentdb2" element={<StudentDBCreation2 />} />
            <Route path="editstudent" element={<EditStudentInfo onClose={() => setShowStudentList(false)} />} />
            <Route
              path="studentdb"
              element={<StudentDBCreation2 />}
            />
            <Route
              path="markattendance"
              element={<MarkAttendance />}
            />
            <Route
              path="groupcreation"
              element={<GroupCreation />}
            />
            <Route
              path="studentupdation"
              element={<StudentUpdate />}
            />
            <Route
              path="workshopdetail"
              element={<WorkshopDetail />}
            />
            <Route path="megasheet1" element={<MegaSheetOne />} />
            <Route path="megasheet2" element={<MegaSheetTwo />} />
            <Route
              path="workshopreport"
              element={<WorkshopReport />}
            />
            <Route
              path="event"
              element={<Event />}
            />

          </Route>
        </Routes>
        {showStudentList && (
          <DisplayStudentList
            batchName={selectedBatch}
            onClose={() => setShowStudentList(false)}
          />
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
