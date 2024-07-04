import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEdit } from "@fortawesome/free-solid-svg-icons";

function Workshop() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1: Workshop Group Creation */}
        <NavLink
          to="/dashboard/groupcreation"
          className="rounded-lg overflow-hidden shadow-md bg-green-200 text-green-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px", minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faUsers} className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-bold text-green-900">Workshop Group Creation</h2>
          </div>
        </NavLink>

        {/* Card 2: Workshop Group Updation */}
        <NavLink
          to="/dashboard/studentupdation"
          className="rounded-lg overflow-hidden shadow-md bg-yellow-200 text-yellow-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px", minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faEdit} className="text-4xl mb-4 text-yellow-600" />
            <h2 className="text-xl font-bold text-yellow-900">Workshop Group Updation</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Workshop;
