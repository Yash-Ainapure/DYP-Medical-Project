import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeLowVision, faWarning } from "@fortawesome/free-solid-svg-icons";
import dypLogo from '../../assets/pappaLogo.jpg'
function Login() {
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState({});
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [failedLogin, setfailedLogin] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("dypmeds");
    const date = new Date();
    if (token) {
      const tokenDate = new Date(token);
      const diff = Math.abs(date.getTime() - tokenDate.getTime());
      if (diff > 0) {
        navigate("./dashboard");
      } else {
        console.log("token expired!!");
      }
      console.log("token present")
    } else {
      console.log("no token found!!", token);
    }
  }, [navigate]);

  useEffect(() => {
    if (failedLogin === true) {
      setTimeout(() => {
        setfailedLogin(false)
      }, 3000)
    }
  }, [failedLogin])

  const handleLogin = (e) => {
    const flags = "gm";
    const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
    const emailPattern = new RegExp(pattern, flags);
    const result = emailPattern.test(text.username);
    if (!result || text.password.trim().length === 0) {
      setAlertText("Invalid email or passowrd format")
      setfailedLogin(true);
      return;
    }


    // console.log("Matches:", result);
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, text.username, text.password)
      .then(() => {
        const current = new Date();
        const future = new Date(current.getTime() + 40 * 60000);
        localStorage.setItem("dypmeds", future.toISOString());
        localStorage.setItem("dypuser", text.username)

        console.log("success...\ntoken : ", future.toISOString());
        handleSuccess();
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setAlertText("Invalid credentials")
        setfailedLogin(true);
        setLoading(false);
      });
  };

  const handleSuccess = () => {

    navigate("./dashboard");
  };

  return (
    <div
      className="w-full h-[100vh] grid grid-cols-2 justify-center items-center "
      style={{ backgroundImage: "linear-gradient(90deg,#2193b0,#6dd5ed)" }}
    >
      <div className="col-span-2 md:col-span-1 w-full flex justify-center">

        <div
          className=" md:border-[8px] rounded-lg bg-blue-200  shadow-xl
         flex flex-col items-center justify-center space-y-5 w-full py-5 h-[100vh]
         md:w-[80%] md:h-auto 
         "
        >{failedLogin && <div className="animate-slide-in absolute top-10  md:top-20 flex items-center justify-center gap-4 bg-red-500 text-white p-2 rounded-lg">
          <FontAwesomeIcon icon={faWarning} />
          {alertText}
        </div>}
          <img src={dypLogo} className="shadow-xl rounded-full h-24 w-24 md:hidden" />

          <p className="text-blue-500 text-center font-black text-3xl">
            <u>Login</u>
          </p>
          <p className="text-blue-400 font-mono text-wrap text-md md:hidden w-[82vw]">
            Login into D.Y. Patil Medical College, Kolhapur, Lab/ Workshop Management System.
          </p>

          <div className="fields w-[90vw] md:w-[37vw]">
            <input
              type="text"
              name="username"
              placeholder="Email"
              className="outline-none bg-white p-4 rounded-full shadow-lg m-3   w-[95%]"
              onChange={handleText}
            />
            {showPass ? (
              <div className="flex m-3">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className=" outline-none bg-white p-4 rounded-l-full shadow-lg  w-[95%]  "
                  onChange={handleText}
                />
                <FontAwesomeIcon
                  icon={faEyeLowVision}
                  onClick={() => setShowPass(!showPass)}
                  className=" text-slate text-3xl p-4 cursor-pointer bg-white rounded-r-full \ text-blue-500"
                />
              </div>
            ) : (
              <div className="flex m-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="outline-none bg-white p-4 rounded-l-full shadow-lg  w-[95%]  "
                  onChange={handleText}

                />
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => setShowPass(!showPass)}
                  className="text-slate text-3xl p-4 cursor-pointer bg-white rounded-r-full \ text-blue-500"
                />
              </div>
            )}
            {/* <div className="flex m-3">
            <input
              type="password"
              placeholder="Password"
              className="bg-white p-4 rounded-l-full shadow-lg  w-[95%]  "
            />
            <FontAwesomeIcon
              icon={faEye}
              className="text-slate text-3xl p-4 cursor-pointer bg-white rounded-r-full \ text-blue-500"
            />
          </div> */}
            <p className="ml-3 text-blue-500 cursor-pointer">Forgot password?</p>
            <button
              className="bg-blue-500 p-4 rounded-full text-white w-[95%] m-3 mt-8 text-center"
              onClick={handleLogin}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center gap-6 h-full "
      >
        <img src={dypLogo} className="shadow-xl rounded-full h-44 w-44 mb-10" />
        <p className="text-white  font-mono text-md text-wrap w-[30vw]">
          Login into D.Y. Patil Medical College, Kolhapur, Laboratory/ Workshop Management System.
        </p>
      </div>
    </div>
  );
}

export default Login;
