import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import lab1 from '../assets/mlt.jpg';
import lab2 from '../assets/LabMachines.jpg';
import lab3 from '../assets/medical.jpg';

const data = [
  { month: 'January', result: 65 },
  { month: 'February', result: 59 },
  { month: 'March', result: 80 },
  { month: 'April', result: 81 },
  { month: 'May', result: 56 },
  { month: 'June', result: 55 },
  { month: 'July', result: 40 },
];

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-800">Lab Management Dashboard</h1>
            <div>
              <NavLink
                to=""
                className="text-gray-600 hover:text-gray-800 mr-4"
                activeClassName="text-gray-800 font-semibold"
              >
                Dashboard
              </NavLink>
              <NavLink
                to=""
                className="text-gray-600 hover:text-gray-800 mr-4"
                activeClassName="text-gray-800 font-semibold"
              >
                Reports
              </NavLink>
              <NavLink
                to=""
                className="text-gray-600 hover:text-gray-800"
                activeClassName="text-gray-800 font-semibold"
              >
                Settings
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Experiment Management */}
          <NavLink
            to=""
            className="rounded-lg overflow-hidden shadow-md bg-blue-200 text-blue-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
            style={{ minHeight: '300px' }}
          >
            <div className="p-8 text-center">
              <FontAwesomeIcon icon={faFlask} className="text-4xl mb-4 text-blue-600" />
              <h2 className="text-xl font-bold text-blue-900">Experiment Management</h2>
            </div>
          </NavLink>

          {/* Card 2: Equipment Tracking */}
          <NavLink
            to=""
            className="rounded-lg overflow-hidden shadow-md bg-green-200 text-green-900 transform transition-transform hover:translate-y-[-5px] flex justify-center items-center"
            style={{ minHeight: '300px' }}
          >
            <div className="p-8 text-center">
              <FontAwesomeIcon icon={faMicroscope} className="text-4xl mb-4 text-green-600" />
              <h2 className="text-xl font-bold text-green-900">Equipment Tracking</h2>
            </div>
          </NavLink>
        </div>

        {/* Charts and Graphs Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Experiment Results</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="result" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

     {/* Demo Lab Photos */}
     <h2 className="text-xl mt-8 font-bold mb-4">Recent Lab Activities</h2>

     <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"> 
          <div className="rounded-lg overflow-hidden shadow-md relative">
            <img src={lab1} alt="Lab 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="rounded-lg  shadow-md ">
            <img src={lab2} alt="Lab 2" className=" inset-0  rounded-lg object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md relative">
            <img src={lab3} alt="Lab 3" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        {/* Animated Counters */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Total Students</h3>
            <span className="text-4xl font-bold mb-2">+</span>
            <CountUp className="text-4xl font-bold mb-2" end={10050} duration={3} separator="," />
          </div>
          <div className="bg-green-200 rounded-lg overflow-hidden shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Total Labs</h3>
            <CountUp className="text-4xl font-bold mb-2" end={25} duration={3} />
          </div>
          <div className="bg-yellow-200 rounded-lg overflow-hidden shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Total Equipments</h3>
            <span className="text-4xl font-bold mb-2">+</span>
            <CountUp className="text-4xl font-bold mb-2" end={354} duration={3} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
