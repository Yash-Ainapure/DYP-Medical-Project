import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("dypmeds");
    const date = new Date();
    if (token) {
      const tokenDate = new Date(token);
      const diff = Math.abs(date.getTime() - tokenDate.getTime());
      if (diff > 0) {
        // navigate("./dashboard");
        return;
      } 
    }
    navigate('/')
  }, []);
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
