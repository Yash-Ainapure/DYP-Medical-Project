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
import Register from './components/attributes/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayBatches from './components/StudentDbCreation/DisplayBatches';
import AddNewStudent from './components/StudentDbCreation/AddNewStudent';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/displaybatches" element={<DisplayBatches />} />
          <Route path="/dashboard/newstudent" element={<AddNewStudent />} />
          <Route path="/dashboard/studentdb" element={<StudentDBCreation />} />
          <Route path="/dashboard/markattendance" element={<MarkAttendance />} />
          <Route path="/dashboard/groupcreation" element={<GroupCreation />} />
          <Route path="/dashboard/studentupdation" element={<StudentUpdate />} />
          <Route path="/dashboard/workshopdetail" element={<WorkshopDetail />} />
          <Route path="/dashboard/megasheet1" element={<MegaSheetOne />} />
          <Route path="/dashboard/megasheet2" element={<MegaSheetTwo />} />
          <Route path="/dashboard/workshopreport" element={<WorkshopReport />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
