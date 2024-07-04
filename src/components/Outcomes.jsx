import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faDatabase } from "@fortawesome/free-solid-svg-icons"; // Updated icons

function Outcomes() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1: Report Creation */}
        <NavLink
          to="/dashboard/workshopreport"
          className="rounded-lg overflow-hidden shadow-md bg-blue-200 text-blue-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px", minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faFileAlt} className="text-4xl mb-4 text-blue-600" />
            <h2 className="text-xl font-bold text-blue-900">Report Creation</h2>
          </div>
        </NavLink>

        {/* Card 2: Data Extraction */}
        <NavLink
          to="/dashboard/workshopdetail"
          className="rounded-lg overflow-hidden shadow-md bg-green-200 text-green-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
          style={{ minHeight: "300px", minWidth: "300px" }}
        >
          <div className="p-8 text-center">
            <FontAwesomeIcon icon={faDatabase} className="text-4xl mb-4 text-green-600" />
            <h2 className="text-xl font-bold text-green-900">Data Extraction</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Outcomes;
