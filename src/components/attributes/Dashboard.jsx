import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Person, Menu } from "@mui/icons-material";
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [tmp, setTmp] = useState(true);
  const [showStudentDB, setShowStuDB] = useState(false);
  const [showEntryPoint, setEntryPoint] = useState(false);
  const [outcome, setOutcome] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showOptions, setShowOptions] = useState(windowWidth > 768);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const str = location.pathname.replace("/dashboard/", "");
    if (str.length > 0) {
      setShowIntro(false);
    }
  }, [location])



  const logout = () => {
    localStorage.removeItem("dypmeds");
    console.log("Logged out successfully");
    // Optionally, you can redirect the user to the login page or perform other actions
    navigate("/");
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowOptions(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-screen w-full"
    // style={
    //   {background:'linear-gradient(45deg, #2193b0, #6dd5ed)'}
    // }
    >
      <div className="dashboard h-full w-full flex justify-between">
        {!showOptions && (
          <Menu
            className=" p-2 m-6 text-blue-400 rounded-full bg-blue-200 border-blue-200 border-2 cursor-pointer shadow-md "
            onClick={() => {
              setTmp(false);
              setShowOptions(true);
            }}
            style={{ fontSize: "45px" }}
          />
        )}
        {showOptions && (
          <div
            className={`options ${(windowWidth < 768) ? 'absolute z-10' : ''} ${tmp ? "animate-slide-right" : "animate-slide-left"
              } rounded-r-xl h-full p-4  w-[90vw] md:w-[23rem]`}
            style={{ background: "linear-gradient(45deg, #5B86E5, #36D1DC)" }}
          >
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => {
                setTmp(true);
                setTimeout(() => setShowOptions(false), 400);
              }}
              className="text-white text-4xl m-3 cursor-pointer"
            />

            <div className="profile flex md:flex-col gap-2 md:gap-0 items-center md:items-start p-2 bg-blue-200 rounded-xl cursor-pointer">
              {/* <FontAwesomeIcon icon={faMale} /> */}
              <Person
                style={{ fontSize: "35px" }}
                className=" bg-white cursor-pointer  rounded-full text-blue border-4 border-white"
              />
              <h3 className="text-wrap text-sm block">{username}</h3>
            </div>
            <div className="h-1 w-full bg-white my-2"></div>
            <div className="overflow-auto h-[74vh] ">
              <div
                className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200  "
                onClick={() => setEntryPoint(!showEntryPoint)}
              >
                Entry point
              </div>
              {showEntryPoint && (
                <div>
                  <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-r-xl p-2 rounded-b-xl">
                    <div
                      className="cursor-pointer my-2 font-medium"
                      onClick={() => setShowStuDB(!showStudentDB)}
                    >
                      <u> Student Database Creation</u>
                    </div>
                    {showStudentDB && (
                      <div className="flex flex-col ml-5">
                        <NavLink
                          to="newstudent"
                          className="text-mono text-sm my-1 rounded-md p-1 hover:bg-white  hover:bg-opacity-40 transition-colors duration-200 "
                          style={{ color: "white" }}
                        >
                          Add new Student
                        </NavLink>
                        <NavLink
                          to="displaybatches"
                          className="text-mono text-sm my-1 rounded-md p-1 hover:bg-white  hover:bg-opacity-40 transition-colors duration-200 "
                          style={{ color: "white" }}
                        >
                          Display Student Batches
                        </NavLink>
                        <NavLink
                          to="studentdb"
                          className="text-mono text-sm my-1 rounded-md p-1 hover:bg-white  hover:bg-opacity-40 transition-colors duration-200 "
                          style={{ color: "white" }}
                        >
                          Create Student Batches
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <NavLink to="groupcreation">
                    <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-xl p-2 ">
                      <div className="cursor-pointer my-2 font-medium">
                        <u> Workshop Group Creation</u>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="studentupdation">
                    <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-xl p-2 ">
                      <div className="cursor-pointer my-2 font-medium">
                        <u> Workshop Detail Updation</u>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="megasheet">
                    <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-xl p-2 ">
                      <div className="cursor-pointer my-2 font-medium">
                        <u> Mega Sheet Entry</u>
                      </div>
                    </div>
                  </NavLink>
                </div>
              )}
              <div
                className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5"
                onClick={() => setOutcome(!outcome)}
              >
                Outcome
              </div>
              {outcome && (
                <div className="flex flex-col align-top text-white">
                  <NavLink to="workshopreport">
                    <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-xl p-2 ">
                      <div className="cursor-pointer my-2 font-medium">
                        <u> Report Creation</u>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="workshopdetail">
                    <div className="flex flex-col align-top text-white ml-7 bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 rounded-xl p-2 ">
                      <div className="cursor-pointer my-2 font-medium">
                        <u> Data Extraction</u>
                      </div>
                    </div>
                  </NavLink>
                </div>
              )}
              <NavLink to="event">

                <div className="w-full p-2 text-white rounded-full font-bold cursor-pointer bg-blue-100 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 mt-5">
                  Events
                </div>
              </NavLink>
            </div>
          </div>
        )}
        {/* here options code is done... */}

        <div className="content w-full h-full">
          {
            showIntro ? (
              <div>hello, this is dashboard</div>
            ) : (
              <Outlet />
            )}
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
