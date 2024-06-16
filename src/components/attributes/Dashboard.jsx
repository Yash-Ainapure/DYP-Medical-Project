import { useNavigate } from 'react-router-dom';
function Dashboard() {

  const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{
          navigate('./newstudent')
        }}> Add new Student </button>
        <button onClick={()=>{
          navigate('./displaybatches')
        }}> Display student batches </button>
        <button onClick={()=>{
          navigate('./studentdb')
        }}> Create Student batches </button>
        <button onClick={()=>{
          navigate('./markattendance')
        }}>Mark Attendance</button>
        <button onClick={()=>{
          navigate('./groupcreation')
        }}>Create a Group</button>
        <button onClick={()=>{
          navigate('./studentupdation')
        }}>Student Updation</button>
        <button onClick={()=>{
          navigate('./workshopdetail')
        }}>Workshop Details</button>
        <button onClick={()=>{
          navigate('./megasheet1')
        }}>Megasheet</button>
        <button onClick={()=>{
          navigate('./workshopreport')
        }}>Workshop report</button>
    </div>
  );
}

export default Dashboard;
