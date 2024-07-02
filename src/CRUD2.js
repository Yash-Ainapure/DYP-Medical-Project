import {
  getDatabase,
  get,
  query,
  orderByChild,
  update,
  equalTo,
  ref,
  set,
} from "firebase/database";

import { database } from "./firebase";
import { setRollList } from "./CRUD";
import { LegendToggle } from "@mui/icons-material";
async function addOneBatch(batchId, batchData) {
  try {
    const batchesRef = ref(database, `batches/${batchId}`);
    await set(batchesRef, batchData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
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
  const batchesRef = ref(database, "batches");
  const snapshot = await get(batchesRef);
  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  } else {
    return [];
  }
}
async function getRollList(batchId) {
  const newBatch = batchId.trim().toLowerCase();
  const batchRef = ref(database, `batches/${batchId}/rollList`);
  const snapshot = await get(batchRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}

async function addOneStudent(roll, studentData) {
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
    console.log(error);
    return false;
  }
}
async function addRollList(batchId, roll) {
  let rollList = await getRollList(batchId);
  console.log(typeof rollList, "\t", rollList);
  rollList.push(roll);
  const batchRef = ref(database, `batches/${batchId}/rollList`);
  await set(batchRef, rollList);
  console.log("Roll added to batch roll list");
}
async function removeRollList(batchId, roll) {
  let rollList = getRollList(batchId);
  rollList.pop(roll);
  const batchRef = ref(database, `batches/${batchId}/rollList`);
  await set(batchRef, rollList);
  console.log("Roll removed from batch roll list");
}
async function updateStudent(roll, updatedData) {
  const studentRef = ref(database, `studentlist/${roll}`);
  await update(studentRef, updatedData);
}

async function createGroup(groupInfo) {
  try {
    const groupid = groupInfo.groupName
      .trim()
      .replaceAll(" ", "")
      .toLowerCase();
    const groupRef = ref(database, `grouplist/${groupid}`);
    await set(groupRef, groupInfo);
    console.log("group created");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function groupExist(groupName) {
  // try {
  //   const groupRef = ref(database, "grouplist/" + groupName);
  //   const snapshot = await get(groupRef);
  //   if (snapshot.exists()) {
  //     return true;
  //   }
  //   return false;
  // } catch (e) {
  //   console.log(e);
  //   return false;
  // }
  const db = getDatabase();
  try {
    const duplicateCheck = query(
      ref(db, "grouplist"),
      orderByChild("groupName"),
      equalTo(groupName)
    );
    const snapshot = await get(duplicateCheck);
    if (snapshot.exists()) {
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function updateGroupedRollList(batchesList) {
  const db = getDatabase();
  try {
    console.log("updation started");
    console.log(batchesList)

    const result=await Promise.all(
      batchesList.map(async (ele, index) => {
        try {
          console.log(ele);
          const batchQuery = query(
            ref(db, "batches"),
            orderByChild("batchName"),
            equalTo(ele.batchName)
          );
          let snapshot;
          try {
            snapshot = await get(batchQuery);
          } catch (er1) {
            console.log(er1);
          }
          console.log("snapshot", snapshot.val());
          if (snapshot.exists()) {
            const batchId = Object.keys(snapshot.val())[0];

            let rollList = snapshot.val()[batchId].rollList;
            console.log(batchesList);
            rollList = rollList.map((rollObj, index) => {
              ele.rollList.map((newRollObj, index) => {
                if (rollObj.rollNo === newRollObj.rollNo) {
                  rollObj.inGroup = true;
                }
              });
              return rollObj;
            });

            let stat;
            try {
              stat = await setRollList(ele.batchName, rollList);
              console.log("second async opr passed");
            } catch (er1) {
              console.log(er1);
            }
            console.log("everything done, no exception", stat);
            return true;
          } else {
            console.log("No batch found with that name");
            return false;
          }
        } catch (bigErr) {
          console.log(bigErr);
        }
      })
    )

    if(result.includes(false)){
      return false;
    }
    console.log(result)
    return result[0]

  } catch (error) {
    console.log(error);
  }
}

export {
  addOneBatch,
  updateBatch,
  deleteBatch,
  getBatch,
  getAllBatches,
  getRollList,
  addOneStudent,
  updateStudent,
  addRollList,
  removeRollList,
  groupExist,
  updateGroupedRollList,
  createGroup,
};
