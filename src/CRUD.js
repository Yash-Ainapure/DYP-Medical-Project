import { getDatabase, get, query, orderByChild, child, update, equalTo, ref, push, set, onValue } from 'firebase/database';
import { ref as storageRef, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import { database, storage } from './firebase';

const setBatchData = async (data, file, arrayBuffer) => {
   try {

      if (!file || !arrayBuffer) {
         console.error("File or array buffer is missing.");
         return;
      }

      // Upload the image to Firebase Storage
      const docRef = storageRef(storage, `documents/${data.batchName}/${file.name}`);
      await uploadBytes(docRef, file);

      // await uploadString(docRef, documentUrl, 'data_url');

      // Get the download URL
      const downloadURL = await getDownloadURL(docRef);

      const finalData = {
         ...data, documentUrl: downloadURL,
      };

      const newPostRef = push(ref(database, 'batches'));
      await set(newPostRef, finalData);

   } catch (error) {
      console.log("error while saving data in db : " + error);
   }
}

const getBatchesData = () => {
   return new Promise((resolve, reject) => {
      try {
         const batchesRef = ref(database, 'batches');
         onValue(batchesRef, (snapshot) => {
            const batchesData = snapshot.val();
            if (batchesData) {
               const batchesList = Object.keys(batchesData).map((key) => ({
                  id: key,
                  ...batchesData[key],
               }));
               resolve(batchesList);
            } else {
               resolve(null);
            }
         }, (error) => {
            reject(error);
         });
      } catch (error) {
         reject(error);
      }
   });
};

const addnewStudent = async (data) => {
   const { roll, ...studentData } = data;
   const studentRef = ref(database, `studentlist/${roll}`);

   try {
      await addRollList(data.assignedBatch,roll)
      await set(studentRef, studentData);
      alert("added new student");
   } catch (error) {
      console.error('Error writing data to Firebase:', error);
   }
}

//function used to retrive all batch names present in database
const fetchBatchNames = async () => {
   const batchesRef = ref(database, 'batches');
   try {
      const snapshot = await new Promise((resolve, reject) => {
         onValue(batchesRef, (snapshot) => {
            resolve(snapshot);
         }, (error) => {
            reject(error);
         });
      });
      if (!snapshot.exists()) {
         console.log("No data available");
         return [];
      }
      const batchNames = [];
      snapshot.forEach((childSnapshot) => {
         const batchName = childSnapshot.val().batchName;
         if (batchName) {
            batchNames.push(batchName);
         }
      });
      return batchNames;
   } catch (error) {
      console.error("Error reading from database:", error);
      throw error;
   }
};


//fetch all students list according to thier batch as parameter
const fetchStudentsByBatch = async (batchName) => {
   const db = getDatabase();
   const studentListRef = ref(db, 'studentlist');

   const studentQuery = query(studentListRef, orderByChild('assignedBatch'), equalTo(batchName));

   try {
      const snapshot = await get(studentQuery);
      if (snapshot.exists()) {
         const students = [];
         snapshot.forEach((childSnapshot) => {
            students.push({ rollNo: childSnapshot.key, ...childSnapshot.val() });
         });
         return students;
      } else {
         console.log("No students found with assignedBatch:", batchName);
         return [];
      }
   } catch (error) {
      console.error("Error fetching students:", error);
      return [];
   }
};

const editStudent = async (data) => {
   const { roll, ...newData } = data;
   try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `studentlist/${roll}`));

      if (snapshot.exists()) {
         await update(ref(database, `studentlist/${roll}`), newData);
         console.log("Student data updated successfully");
      } else {
         console.log("No data available for the given roll number");
      }
   } catch (error) {
      console.error("Error updating student data:", error);
   }

}

const deleteStudent = async (data) => {
   console.log("Roll no: ", data.rollNo);
   await deleteRollList(data.assignedBatch,data.rollNo)
   const studentRef = ref(database, `studentlist/${data.rollNo}`);
   try {
      await set(studentRef, null); // This will delete the student data
      console.log("Student deleted successfully");
   } catch (error) {
      console.error("Error deleting student:", error);
      throw error; // Rethrow to handle it in the calling function
   }
};

const processData = (data, assignedBatch) => {
   const headers = data[0];
   const rows = data.slice(1);
   rows.forEach(row => {
      const student = {};
      headers.forEach((header, index) => {
         student[header] = row[index];
      });
      student.assignedBatch = assignedBatch; // Add assignedBatch to each student
      const studentRef = ref(database, 'studentlist/' + student.RollNo);
      set(studentRef, student)
         .then(() => {
            console.log('Data uploaded successfully:', student);
         })
         .catch((error) => {
            console.error('Error uploading data:', error);
         });
   });
};

async function deleteRollList(batchName,roll){
   const db = getDatabase();
   const batchQuery = query(ref(db, 'batches'), orderByChild('batchName'), equalTo(batchName));
   const snapshot = await get(batchQuery);
   if (snapshot.exists()) {
      const batchId = Object.keys(snapshot.val())[0];
      
      let rollList= snapshot.val()[batchId].rollList;
      rollList.pop(roll)
      setRollList(batchName,rollList)
   } else {
      console.log("No batch found with that name");
      return [];
   }
}

async function setRollList(batchName, rollList){
   const db = getDatabase();
   const batchQuery = query(ref(db, 'batches'), orderByChild('batchName'), equalTo(batchName));
   const snapshot = await get(batchQuery);
   if (snapshot.exists()) {
      const batchId = Object.keys(snapshot.val())[0];
      const batchRef = ref(db, `batches/${batchId}`);
      await update(batchRef, { rollList });
      console.log("Roll list updated successfully");
      return true
   } else {
      console.log("No batch found with that name");
      return false;
   }
}


async function addRollList(batchName,roll){
   const db = getDatabase();
   const batchQuery = query(ref(db, 'batches'), orderByChild('batchName'), equalTo(batchName));
   const snapshot = await get(batchQuery);
   if (snapshot.exists()) {
      const batchId = Object.keys(snapshot.val())[0];
      
      let rollList= snapshot.val()[batchId].rollList;
      rollList.push({"rollNo":roll,isGroup:false})
      setRollList(batchName,rollList)
   } else {
      console.log("No batch found with that name");
      return [];
   }
}
export { setBatchData,setRollList, getBatchesData, addnewStudent, fetchBatchNames, fetchStudentsByBatch, editStudent, deleteStudent, processData }
