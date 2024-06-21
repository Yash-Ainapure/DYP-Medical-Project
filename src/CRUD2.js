import { getDatabase, get, query, orderByChild, child, update, equalTo, ref, push, set, onValue } from 'firebase/database';
import { ref as storageRef, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import { database, storage } from './firebase';

async function addOneBatch(batchId, batchData){
    try {
        const batchesRef = ref(database, `batches/${batchId}`);
        await set(batchesRef, batchData);
        return true
    } catch (error) {
        console.log(error)
        return false    
    }
}
async function updateBatch(batchId, updatedData) {
    const batchRef = ref(database, `batches/${batchId}`);
    await update(batchRef, updatedData);
}
async function deleteBatch(batchId) {
    const batchRef = ref(database, `batches/${batchId}`);
    await set(batchRef, null);
}
async function getBatch(batchId) {
    const batchRef = ref(database, `batches/${batchId}`);
    const snapshot = await get(batchRef);
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}
async function getAllBatches() {
    const batchesRef = ref(database, 'batches');
    const snapshot = await get(batchesRef);
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    } else {
        return [];
    }
}
async function getRollList(batchId) {
    const newBatch=batchId.trim().toLowerCase();
    const batchRef = ref(database, `batches/${batchId}/rollList`);
    const snapshot = await get(batchRef);
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}

async function addOneStudent(roll, studentData){
    try {
        const studentRef = ref(database, `studentlist/${roll}`);
        const snapshot = await get(studentRef);
        if (snapshot.exists()) {
            console.log(`Student with roll number ${roll} already exists`);
            return false;
        } else {
            await set(studentRef, studentData);
            console.log(`Student with roll number ${roll} added successfully`);
            return true;
        }
        
    } catch (error) {
        console.log(error)
        return false
    }
}
async function addRollList(batchId, roll) {
    let rollList =await getRollList(batchId);
    console.log(typeof rollList,"\t",rollList)
    rollList.push(roll);
    const batchRef = ref(database, `batches/${batchId}/rollList`);
    await set(batchRef, rollList);
    console.log("Roll added to batch roll list");
}
async function removeRollList(batchId , roll){
    let rollList = getRollList(batchId);
    rollList.pop(roll);
    const batchRef = ref(database, `batches/${batchId}/rollList`);
    await set(batchRef, rollList);
    console.log("Roll removed from batch roll list");

}
async function updateStudent(roll, updatedData){
    const studentRef = ref(database, `studentlist/${roll}`)
    await update(studentRef, updatedData)
}



export { addOneBatch, updateBatch, deleteBatch, getBatch, getAllBatches, getRollList, addOneStudent, updateStudent, addRollList, removeRollList};