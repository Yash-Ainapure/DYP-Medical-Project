import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faThList, faPlusCircle } from "@fortawesome/free-solid-svg-icons";


function Batches() {
  return (

    <div className="h-screen flex justify-center items-center">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Add Student */}
        <NavLink
          to="/dashboard/newstudent"
          className="rounded-lg overflow-hidden shadow-md bg-purple-200 text-purple-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px" , minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faUserPlus} className="text-4xl mb-4 text-purple-600" />
            <h2 className="text-xl font-bold text-purple-900">Add Student</h2>
          </div>
        </NavLink>

        {/* Card 2: Display Batch */}
        <NavLink
          to="/dashboard/displaybatches"
          className="rounded-lg overflow-hidden shadow-md bg-green-200 text-green-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{minHeight: "300px" , minWidth: "300px"}}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faThList} className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-bold text-green-900">Display Batch</h2>
          </div>
        </NavLink>

        {/* Card 3: Create Batch */}
        <NavLink
          to="/dashboard/studentdb"
          className="rounded-lg overflow-hidden shadow-md bg-yellow-200 text-yellow-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px" , minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faPlusCircle} className="text-4xl mb-4 text-yellow-600" />
            <h2 className="text-xl font-bold text-yellow-900">Create Batch</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Batches;
