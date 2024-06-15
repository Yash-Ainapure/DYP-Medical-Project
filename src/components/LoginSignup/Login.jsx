import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
   const [isLoading, setLoading] = useState(false);
   const [text, setText] = useState({});
   const navigate =useNavigate();

   const handleText = (e) => {
      e.preventDefault();
      setText({
         ...text,
         [e.target.name]: e.target.value
      });
   }

   const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      signInWithEmailAndPassword(auth, text.username, text.password)
         .then(() => {
            handleSuccess();
            setLoading(false);
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setLoading(false);
         });
   }

   const handleSuccess = () => {
      console.log("success...");
      navigate('./dashboard')
   }

   return (
      <>
         <div className="flex justify-center items-center h-screen bg-blue-500">
            <div className="text-center p-4">
               <h2 className="text-white text-8xl font-semibold">SIMAN</h2>
            </div>
            <div className="ml-16 mt-10 bg-white p-6 rounded-lg shadow-md w-96">
               <h2 className="mb-6 text-2xl">Sign in</h2>
               <form>
                  <div className="mb-4">
                     <label htmlFor="email" className="block mb-2">Email id</label>
                     <input onChange={handleText} name="username" type="email" id="email" required className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="password" className="block mb-2">Password</label>
                     <input onChange={handleText} type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div className="mb-4 text-right">
                     <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                  </div>
                  <button disabled={isLoading} onClick={handleLogin} type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700">
                     {isLoading ? 'Loading…' : 'Login'}
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}

export default Login;