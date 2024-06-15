// // import React, { Component } from 'react'
// // import { useState } from 'react'
// // import './markAttendance.css'
// // import {
// //   Button,
// //   Form,
// //   Upload,
// // } from 'antd';
// // import { PlusOutlined } from '@ant-design/icons';
// // const NormFile = (e) => {
// //   if (Array.isArray(e)) {
// //     return e;
// //   }
// //   return e?.fileList;
// // };
// // const data = [
// //   {
// //     studentId: '01',
// //     name: 'John Doe',
// //     status: 'No',
// //     comment: 'NA',
// //   },
// //   {
// //     studentId: '02',
// //     name: 'Sara',
// //     status: 'Yes',
// //     comment: 'NA',
// //   },
// //   {
// //     studentId: '03',
// //     name: 'Mike',
// //     status: 'Yes',
// //     comment: 'NA',
// //   },

// // ]

// // const MarkAttendance = () => {
// //     const [studentData, setstudentData] = useState(data)

// //     const onChangeInput = (e, studentId) => {
// //       const { name, value } = e.target
// //       console.log('name', name)
// //       console.log('value', value)
// //       console.log('studentId', studentId)

// //       const editData = studentData.map((item) =>
// //         item.studentId === studentId && name ? { ...item, [name]: value } : item
// //       )

// //       console.log('editData', editData)

// //       setstudentData(editData)
// //     }


// //     return (
// //       <div>
// //         <div className="container">
// //       <h1 className="title">ReactJS Editable Table</h1>
// //       <table>
// //         <thead>
// //           <tr>
// //           <th>Roll No</th>
// //             <th>Name</th>
// //             <th>status</th>
// //             <th>comment</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {studentData.map(({ studentId, name, status, comment }) => (
// //             <tr key={studentId}>
// //               <td>
// //                 <input
// //                   studentId="studentId"
// //                   value={studentId}
// //                   type="text"
// //                   onChange={(e) => onChangeInput(e, studentId)}
// //                   placeholder="Type Name"
// //                 />
// //               </td>
// //               <td>
// //                 <input
// //                   name="name"
// //                   value={name}
// //                   type="text"
// //                   onChange={(e) => onChangeInput(e, studentId)}
// //                   placeholder="Type Email"
// //                 />
// //               </td>
// //               <td>
// //                 <input
// //                   name="status"
// //                   type="text"
// //                   value={status}
// //                   onChange={(e) => onChangeInput(e, studentId)}
// //                   placeholder="Type Position"
// //                 />
// //               </td>
// //               <td>
// //                 <input
// //                   name="comment"
// //                   type="text"
// //                   value={comment}
// //                   onChange={(e) => onChangeInput(e, studentId)}
// //                   placeholder="Type Position"
// //                 />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //     <Form>
// //     <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
// //           <Upload action="/upload.do" listType="picture-card">
// //             <div>
// //               <PlusOutlined />
// //               <div style={{ marginTop: 8 }}>Upload</div>
// //             </div>
// //           </Upload>
// //         </Form.Item>
// //         </Form>
// //         <Button href='/studentupdation'>Add new Student</Button>
// //       </div>
// //     )
// //   }
// // export default MarkAttendance

// // import React, { Component, useState } from 'react';

// // export class MarkAttendance extends Component {

// //   render() {
// //     const [batch, setBatch] = useState("");
// //     const [date, setDate] = useState("");
// //     const [students, setStudents] = useState([]);

// //     const handleAddStudent = () => {
// //       setStudents([...students, { name: "", status: "" }]);
// //     };

// //     const handleMarkAttendance = (studentIndex, status) => {
// //       students[studentIndex].status = status;
// //       setStudents([...students]);
// //     };
// //     return (
// //       <div className="attendance-sheet">
// //         <h1>Mark Attendance</h1>
// //         <div className="attendance-sheet-header">
// //           <input
// //             type="text"
// //             placeholder="Batch"
// //             value={batch}
// //             onChange={(e) => setBatch(e.target.value)}
// //           />
// //           <input
// //             type="date"
// //             placeholder="Date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //           />
// //         </div>
// //         <div className="attendance-sheet-table">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Sr.No.</th>
// //                 <th>Name of Students</th>
// //                 <th>Status</th>
// //                 <th>Comment</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {students.map((student, index) => (
// //                 <tr key={index}>
// //                   <td>{index + 1}</td>
// //                   <td><input type="text" placeholder="Name" value={student.name} onChange={(e) => handleMarkAttendance(index, e.target.value)} /></td>
// //                   <td>
// //                     <input
// //                       type="checkbox"
// //                       checked={student.status === "present"}
// //                       onChange={(e) => handleMarkAttendance(index, e.target.checked ? "present" : "")}
// //                     />
// //                   </td>
// //                   <td><input type="text" placeholder="Comment" value={student.comment} onChange={(e) => handleMarkAttendance(index, e.target.value)} /></td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="attendance-sheet-actions">
// //           <button onClick={handleAddStudent}>Add Student</button>
// //           <button>Upload Sheet</button>
// //         </div>
// //       </div>
// //     );
// //   };
// // }


// // export default MarkAttendance;

// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { Button, Form, Input, Popconfirm, Table, Upload} from 'antd';
// import '../StudentDbCreation/StudentDBCreation.css'
// // import { PlusOutlined } from '@ant-design/icons';
// // const NormFile = (e) => {
// //   if (Array.isArray(e)) {
// //     return e;
// //   }
// //   return e?.fileList;
// // };

// const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);

//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({
//         ...record,
//         ...values,
//       });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   let childNode = children;

//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             messrollNo: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }

//   return <td style={{ backgroundColor: '#CAF0F8' }} {...restProps}>{childNode}</td>;
// };

// const MarkAttendance = () => {
//   const [dataSource, setDataSource] = useState([
//     {
//       key: '0',
//       name: 'Student 1',
//       comment:'YES',
//       rollNo: '1',
     
//     },
//     {
//       key: '1',
//       name: 'Student 2',
//       comment:"no",
//       rollNo: '2',
     
//     },
//   ]);

//   const handleDelete = (key) => {
//     const newData = dataSource.filter((item) => item.key !== key);
//     setDataSource(newData);
//   };

//   const defaultColumns = [
//     {
//       title: 'rollNo',
//       dataIndex: 'rollNo',
//       editable: true,
//     },
//     {
//       title: 'name',
//       dataIndex: 'name',
//       width: '30%',
//       editable: false,
//     },
//     {
//       title: 'Comment',
//       dataIndex: 'comment',
//       width: '30%',
//       editable: true,
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) =>
//         dataSource.length >= 1 ? (
//           <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//             <a>Delete</a>
//           </Popconfirm>
//         ) : null,
//     },
//   ];

//   const handleAdd = () => {
//     const newData = {
//       key: dataSource.length.toString(),
//       name: `Student${dataSource.length + 1}`,
//       rollNo: `${dataSource.length + 1}`,
//       comment: `able to attend `,
//     };
//     setDataSource([...dataSource, newData]);
//   };

//   const handleSave = (row) => {
//     const newData = [...dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, {
//       ...item,
//       ...row,
//     });
//     setDataSource(newData);
//   };

//   const components = {
//     body: {
//       row: EditableRow,
//       cell: EditableCell,
//     },
//   };
//   function CustomToolbar() {
//     return (
//       <GridToolbarContainer>
//         <GridToolbarExport />
//       </GridToolbarContainer>
//     );
//   }

//   const columns = defaultColumns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave,
//       }),
//     };
//   });

//   return (
//     <div style={{marginBottom:500}}>
//       <h1 style={{textAlign:'center'}}>Mark Attendance</h1>
//       <Button
//         onClick={handleAdd}
//         type="primary"
//         style={{
//           marginTop: 10,
//           marginBottom: 16,
//           backgroundColor: '#ff6600'
//         }}
//       >
//         Add a row
//       </Button>
//       <Table
//         components={components}
//         rowClassName={() => 'editable-row'}
//         bordered
//         dataSource={dataSource}
//         columns={columns}
//         rowSelection={{}}
//       />
//       {/* <Form className='formstudent'
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 14 }}
//         layout="horizontal"
//         style={{ maxWidth: 600 }}
//       >
//         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
//           <Upload action="/upload.do" listType="picture-card" >
//             <div >
//               <PlusOutlined />
//               <div>Upload</div>
//             </div>
//           </Upload>
//         </Form.Item>
//       </Form> */}
//     </div>
//   );
// };

// export default MarkAttendance;
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table, Upload} from 'antd';
import '../StudentDbCreation/StudentDBCreation.css'
// import { PlusOutlined } from '@ant-design/icons';
// const NormFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            messrollNo: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td style={{ backgroundColor: '#CAF0F8' }} {...restProps}>{childNode}</td>;
};

const MarkAttendance = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Name 1',
      status:"Absent",
      comment:'She is not present',
      rollNo: '1',
     
    },{
      key: '1',
      name: 'Name 2',
      status:"present",
      comment:"He has some problem",
      rollNo: '2',
     
    },
    {
      key: '1',
      name: 'Name 3',
      status:"Present",
      comment:"he is present",
      rollNo: '3',
     
    },
  ]);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: 'Sr. No',
      dataIndex: 'rollNo',
      editable: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
      editable: false,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '30%',
      editable: true,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      width: '30%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData = {
      key: dataSource.length.toString(),
      name: `Student${dataSource.length + 1}`,
      rollNo: `${dataSource.length + 1}`,
      comment: `able to attend `,
    };
    setDataSource([...dataSource, newData]);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div style={{marginBottom:500}}>
      <h1 style={{textAlign:'center'}}>Mark Attendance</h1>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginTop: 10,
          marginBottom: 16,
          backgroundColor: 'rgb(37, 150, 190)'
        }}
      >
        Add a new student
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowSelection={{}}
      />
      {/* <Form className='formstudent'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card" >
            <div >
              <PlusOutlined />
              <div>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export default MarkAttendance;
