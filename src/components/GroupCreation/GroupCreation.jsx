// import React, { useState } from "react";
// import "./GroupCreation.css";

// const WorkshopGroupCreation = () => {
//   const [workshopName, setWorkshopName] = useState("");
//   const [workshopDate, setWorkshopDate] = useState("");
//   const [totalParticipants, setTotalParticipants] = useState("");
//   const [totalBatches, setTotalBatches] = useState("");
//   const [batchName, setBatchName] = useState("");
//   const [batchLimit, setBatchLimit] = useState("");
//   const [batches, setBatches] = useState([]);

//   const onCreateGroup = () => {
//     // Create the workshop group here
//   };

//   const handleBatchChange = (event) => {
//     setBatchName(event.target.value);
//   };

//   return (
//     <div className="workshop-group-creation">
//       <div className="header">
//         <h3>Workshop Group Creation</h3>
//       </div>
//       <div className="form">
//         <form onSubmit={onCreateGroup}>
//           <div className="input-group">
//             <label htmlFor="workshopName">Name of Workshop</label>
//             <input
//               type="text"
//               id="workshopName"
//               value={workshopName}
//               onChange={(e) => setWorkshopName(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="workshopDate">Date of Workshop</label>
//             <input
//               type="date"
//               id="workshopDate"
//               value={workshopDate}
//               onChange={(e) => setWorkshopDate(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="totalParticipants">Total Participants</label>
//             <input
//               type="number"
//               min="0"
//               id="totalParticipants"
//               value={totalParticipants}
//               onChange={(e) => setTotalParticipants(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="totalBatches">Total Number of Batches</label>
//             <input
//               type="number"
//               min="0"
//               id="totalBatches"
//               value={totalBatches}
//               onChange={(e) => setTotalBatches(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="batchName">Batch</label>
//             <select
//               id="batchName"
//               value={batchName}
//               onChange={handleBatchChange}
//             >
//               {batches.map((batch) => (
//                 <option key={batch.id} value={batch.name}>
//                   {batch.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="input-group">
//             <label htmlFor="batchLimit">Limit</label>
//             <input
//               type="number"
//               min="0"
//               id="batchLimit"
//               value={batchLimit}
//               onChange={(e) => setBatchLimit(e.target.value)}
//             />
//           </div>
//           <div className="buttons">
//             <button type="button">View</button>
//             <button type="button">Addition</button>
//             <button type="button">Replace/Deletion</button>
//           </div>
//           <div className="buttons">
//           <div className="create-group-button">
//           <button type="submit">Create Group</button>
//         </div>
//         <div className="download-button">
//           <button type="button">Download</button>
//         </div>
//         </div>
//         </form>
//       </div>
     
//     </div>
//   );
// };

// export default WorkshopGroupCreation;

import React, { useState } from "react";
import "./GroupCreation.css";

const WorkshopGroupCreation = () => {
  const [workshopName, setWorkshopName] = useState("");
  const [workshopDate, setWorkshopDate] = useState("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [totalBatches, setTotalBatches] = useState("");
  const [batchName, setBatchName] = useState("");
  const [batchLimit, setBatchLimit] = useState("");
  const [batches, setBatches] = useState([]);

  const onCreateGroup = () => {
    // Create the workshop group here
  };

  const handleBatchChange = (event) => {
    setBatchName(event.target.value);
  };

  return (
    <div className="workshop-group-creation">
      <div className="header">
        <h3>Workshop Group Creation</h3>
      </div>
      <div className="form">
        <form onSubmit={onCreateGroup}>
          <div className="input-group">
            <label htmlFor="workshopName">Name of Workshop</label>
            <input
              type="text"
              id="workshopName"
              value={workshopName}
              onChange={(e) => setWorkshopName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="workshopDate">Date of Workshop</label>
            <input
              type="date"
              id="workshopDate"
              value={workshopDate}
              onChange={(e) => setWorkshopDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="totalParticipants">Total Participants</label>
            <input
              type="number"
              min="0"
              id="totalParticipants"
              value={totalParticipants}
              onChange={(e) => setTotalParticipants(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="totalBatches">Total Number of Batches</label>
            <input
              type="number"
              min="0"
              id="totalBatches"
              value={totalBatches}
              onChange={(e) => setTotalBatches(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="batchName">Batch</label>
            <select
              id="batchName"
              value={batchName}
              onChange={handleBatchChange}
            >
              <option value="">Select Batch</option>
              <option value="Demo 1">Demo 1</option>
              <option value="Demo 2">Demo 2</option>
              <option value="Demo 3">Demo 3</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="batchLimit">Limit</label>
            <input
              type="number"
              min="0"
              id="batchLimit"
              value={batchLimit}
              onChange={(e) => setBatchLimit(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button type="button">View</button>
            <button type="button">Addition</button>
            <button type="button">Replace/Deletion</button>
          </div>
          <div className="buttons">
            <div className="create-group-button">
              <button type="submit">Create Group</button>
            </div>
            <div className="download-button">
              <button type="button">Download</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkshopGroupCreation;
