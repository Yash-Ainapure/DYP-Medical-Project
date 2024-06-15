import * as Yup from "yup";

const support_format = ["image/jpg", "image/jpeg", "image/png"];

const FormValidation = Yup.object({
   // batchName Name
   batchName: Yup.string()
      .min(2)
      .max(25)
      .trim()
      .required("batch name is required."),
   // speciality
   speciality: Yup.string()
      .trim()
      .required("speciality is required."),
   // level URL
   level: Yup.string().trim().required("level is required."),
   // academicYear name
   academicYear: Yup.string()
      .min(2)
      .max(25)
      .trim()
      .required("academicYear is required."),
   document:Yup.string().trim().required("reqq"),
   // documentUrl Email
   documentUrl: Yup.string()
      .trim()
      .required("documentUrl is required."),
});

export default FormValidation;
