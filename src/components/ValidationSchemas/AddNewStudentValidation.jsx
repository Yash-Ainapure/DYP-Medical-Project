import * as Yup from "yup";

const NewStudentValidation = Yup.object({
   // first Name
   firstName: Yup.string()
      .min(2)
      .max(25)
      .trim()
      .required("first name is required."),

   // last Name
   lastName: Yup.string()
      .min(2)
      .max(25)
      .trim()
      .required("last name is required."),

   // contact
   contact: Yup.string()
      .trim()
      .required("contact no. is required."),

   // email 
   email: Yup.string().email().trim().required("email is required."),

   //role
   role:Yup.string().trim().required("role is required"),

   roll:Yup.string().trim().required("roll no. is required"),

   // assignedBatch
   assignedBatch: Yup.string()
      .trim()
      .required("assignedBatch is required."),
});

export default NewStudentValidation;
