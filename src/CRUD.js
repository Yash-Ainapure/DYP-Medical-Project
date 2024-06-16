import { ref, push, set, onValue } from 'firebase/database';
import { ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';
import { database, storage } from './firebase';

const setBatchData = async (data, documentUrl) => {
   try {
      // Upload the image to Firebase Storage
      const docRef = storageRef(storage, `documents/${data.batchName}`);
      await uploadString(docRef, documentUrl, 'data_url');

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


export { setBatchData, getBatchesData, addnewStudent, fetchBatchNames }