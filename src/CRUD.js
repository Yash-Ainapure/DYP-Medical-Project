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

export { setBatchData, getBatchesData }