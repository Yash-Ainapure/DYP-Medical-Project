import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Person, Menu, Logout } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Auth from "../../Auth";
import Footer from "../SubComponenets/Footer";
import Dashboard1 from "../Dashboard1";
function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Auth()) navigate("/");
  }, []);
  const [username, setUsername] = useState("");
  const [tmp, setTmp] = useState(false);
  const [showStudentDB, setShowStuDB] = useState(false);
  const [showEntryPoint, setEntryPoint] = useState(false);
  const [outcome, setOutcome] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showOptions, setShowOptions] = useState(windowWidth > 768);
  const [showIntro, setShowIntro] = useState(true);
  const [modal, setModal] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const str = location.pathname.replace("/dashboard", "");
    if (str.length > 1) {
      setShowIntro(false);
    }
  }, [location]);

  useEffect(() => {
    setUsername(localStorage.getItem("dypuser"));
  }, []);

  const closeModal = () => setModal(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowOptions(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full">
      {modal && <Modal navigate={navigate} cancleEvent={closeModal} />}
      <div className="dashboard h-full w-full flex justify-between">
        {!showOptions && (
          <Menu
            className=" p-2 m-6  text-blue-400 rounded-full bg-blue-200 border-blue-200 border-2 cursor-pointer shadow-xl "
            onClick={() => {
              setTmp(false);
              setShowOptions(true);
            }}
            style={{ fontSize: "45px" }}
          />
        )}
        {showOptions && (
          <div
            className={`options ${windowWidth < 768 ? "absolute z-10" : ""} ${
              tmp ? "animate-slide-right" : "animate-slide-left"
            }  h-full p-4  w-[90vw] md:w-[23rem] `}
            style={{
              background: "linear-gradient(45deg, #5B86E5, #36D1DC)",
              shadowRadius: "2px",
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
            }}
          >
            <FontAwesomeIcon
              icon={faClose}
              onClick={async () => {
                setTmp(true);
                await setTimeout(() => setShowOptions(false), 500);
              }}
              className="text-white text-4xl m-3 cursor-pointer "
            />

            <div
              className="profile flex md:flex-col gap-2 md:gap-0 items-center md:items-start p-2 bg-blue-200 rounded-xl cursor-pointer"
              onClick={() => setModal(true)}
            >
              {/* <FontAwesomeIcon icon={faMale} /> */}
              <div className="flex gap-2 items-center justify-start p-2">
                <Person
                  style={{ fontSize: "45px" }}
                  className=" bg-white cursor-pointer  rounded-full text-blue border-4 border-white mr-2"
                />
                <div className="flex-col items-start mt-2">
                  <h3 className="text-wrap text-sm block font-bold ">
                    {username}
                  </h3>
                  <div className="flex items-center my-2">
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="text-gray-800 mr-1 "
                    />
                    <p className="text-gray-800 text-sm">Logout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1 w-full bg-white my-2"></div>
            <div className="overflow-auto h-[74vh] ">
              
              <NavLink to="dashboard">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  <i className="fas fa-tachometer-alt mx-2"></i> Dashboard
                </div>
              </NavLink>
              <NavLink to="batches">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5 ">
                  <i className="fas fa-user-graduate  mx-2"></i> Batches
                </div>
              </NavLink>
              <NavLink to="workshop">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  <i className="fas fa-tools mx-2"></i> Workshop
                </div>
              </NavLink>
              <NavLink to="megasheet1">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  <i className="fas fa-file-alt mx-2"></i> MegaSheet
                </div>
              </NavLink>
              <NavLink to="outcomes">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  <i className="fas fa-chart-line mx-2"></i> Outcomes
                </div>
              </NavLink>
              <NavLink to="events">
                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  <i className="fas fa-tasks mx-2"></i> Events
                </div>
              </NavLink>
            </div>
          </div>
        )}
        {/* here options code is done... */}

        <div className="content w-full h-full overflow-x-hidden">
          <div
            className="text-center py-2  text-white"
            style={{
              background: "linear-gradient(45deg, #5B86E5, #36D1DC)",
            }}
          >
            <h1 className="text-3xl font-bold mb-1">SIMAN</h1>
          </div>
          {showIntro ? <Dashboard1 /> : <Outlet />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
function Modal({ navigate, cancleEvent }) {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10">
      <div
        className="  animate-slide-in bg-gray-900 rounded-xl shadow-xl p-4"
        style={{
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <div className=" text-center p-3 flex-auto justify-center ">
          <Logout
            className="text-bold text-red-500"
            style={{ fontSize: "95px" }}
          />
          <h2 className="text-xl font-bold py-4 text-gray-200">
            Are you sure?
          </h2>
          <p className="font-bold text-sm text-gray-500 px-2">
            Do you really want to continue ? This process cannot be undone
          </p>
        </div>
        <div className="p-2 mt-2 text-center space-x-1 md:block">
          <button
            className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
            onClick={cancleEvent}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
            onClick={() => {
              localStorage.removeItem("dypmeds");
              navigate("/");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
