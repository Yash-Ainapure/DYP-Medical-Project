
const CompanyLogoPreview = (props) => {
   const { value, setFieldValue ,documentUrl} = props;
   return (
      <>
         <div
            style={{
               display: "flex",
               justifyContent: "flex-start",
               alignItems: "center",
               background: "white",
               width: "fit-content",
               height: "40px",
               padding: "0rem 0.5rem",
            }}
         >
            {value != null ? (
               <img
                  src={documentUrl}
                  alt="document"
                  style={{
                     maxWidth: "fit-content",
                     height: "2rem",
                     marginRight: "1rem",
                  }}
               />
            ) : (
               <span>document name</span>
            )}

            <i
               className="fa-solid fa-xmark"
               onClick={() => {
                  setFieldValue("document", null);
                  setFieldValue("documentUrl", null);
               }}
            ></i>
         </div>
      </>
   );
};

export default CompanyLogoPreview;
