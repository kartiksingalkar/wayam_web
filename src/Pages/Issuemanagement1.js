// // import { React, useEffect, useState } from "react";
// // import { Box, Typography } from "@mui/material";
// // // import Navbar from "../Components/Navbar";
// // import Header from "../Components/HeaderBar";
// // import Footer1 from "../Components/Footer";
// // // import Footer1 from "../Components/Footer1";

// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// // import { styled } from "@mui/material/styles";
// // import Paper from "@mui/material/Paper";
// // import Grid from "@mui/material/Grid";
// // // import Scroll from "@mui/material/Grid";
// // // import { textAlign } from "@mui/system";
// // // import edit from "../assets/dashboard/edit.png";
// // // import frame from "../assets/dashboard/frame.png";
// // // import search from "../assets/dashboard/search.png";
// // // import Dashboard from "./Dashboard";
// // // import "../styles/Issuemanagement1.css";
// // import IssueManagementComponent from "../Components/IssueManagementComponent";
// // import IssueManagementComponent1 from "../Components/IssueManagementComponent1";
// // import SearchBox from "../Components/SearchBox";
// // import NewTemplate from "../Pop Up/NewTemplate";

// // import AddButton from "../Components/AddButton";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import SearchTemplate from "../Components/SearchTemplate";
// // import SearchIssue from "../Components/SearchIssue";

// // const data = [
// //   { templateTitle: "टेम्प्लेट 1", type: "चौकस चौरस , गप्पाटप्पा" },
// //   { templateTitle: "टेम्प्लेट 2", type: "कल्पक, शब्दरंजन " },
// //   { templateTitle: "टेम्प्लेट 3", type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा " },
// //   { templateTitle: "टेम्प्लेट 4", type: "गोष्टी ,शब्दरंजन" },
// //   { templateTitle: "टेम्प्लेट 5", type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा " },
// // ];

// // const arrayofObjects = [
// //   {
// //     number: "मे 2023",
// //     date: "24/02/2023 ",
// //     type: "चौकस चौरस , गप्पाटप्पा ",
// //     status: " ",
// //   },
// //   {
// //     number: "एप्रिल 2023",
// //     date: "27/04/2023",
// //     type: "कल्पक, शब्दरंजन ",
// //     status: "मान्यता प्रतीक्षा करत आहे  ",
// //   },
// //   {
// //     number: "मार्च 2023",
// //     date: "25/03/2023 ",
// //     type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा  ",
// //     status: "मान्यता प्रतीक्षा करत आहे  ",
// //   },
// //   {
// //     number: "फेब्रुवारी 2023",
// //     date: "20/02/2023 ",
// //     type: "गोष्टी, शब्दरंजन ",
// //     status: "अंक मंजूर झाला",
// //   },
// //   {
// //     number: "जानेवारी 2023",
// //     date: "22/01/2023 ",
// //     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
// //     status: "अंक मंजूर झाला ",
// //   },
// //   {
// //     number: "जानेवारी 2023",
// //     date: "22/01/2023 ",
// //     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
// //     status: "अंक मंजूर झाला ",
// //   },
// //   {
// //     number: "जानेवारी 2023",
// //     date: "22/01/2023 ",
// //     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
// //     status: "अंक मंजूर झाला ",
// //   },
// // ];

// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: "center",
// //   color: theme.palette.text.secondary,
// // }));

// // export default function Issuemanagement1() {
// //   const [open, setopen] = useState(false);

// //   const NewTemplatee = () => {
// //     setopen(!open);
// //   };

// //   const [value, setValue] = useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   const [categories, setCategories] = useState([]);
// //   const [templates, setTemplates] = useState([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/getalltemplates`,
// //           {
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         if (response.data.status) {
// //           setTemplates(response.data.data);
// //           console.log("templates", response.data.data);
// //         }
// //       } catch (e) {}
// //     }
// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/getallcategories`,
// //           {
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         if (response.data.status) {
// //           setCategories(response.data.data);
// //           console.log("categories", response.data.data);
// //         }
// //       } catch (e) {}
// //     }
// //     fetchData();
// //   }, []);

// //   const [issues, setIssues] = useState([]);
// //   const [templateName, setTemplateName] = useState([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/getallissues`,
// //           {
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );

// //         if (response.data.status) {
// //           setIssues(response.data.data);
// //           setTemplateName(response.data.template_data);
// //           console.log("categories", response.data.data);
// //         }
// //       } catch (e) {}
// //     }
// //     fetchData();
// //   }, []);

// //   return (
// //     <Box sx={{ height: "100vh" }}>
// //       {/* start of navbar */}
// //       <Box
// //         sx={{
// //           width: "100%",
// //           // height: "10vh",
// //           display: "flex",
// //           flexDirection: "column",
// //         }}
// //       >
// //         {/* <Navbar /> */}
// //         <Header />
// //       </Box>
// //       {/* end of navbar */}

// //       {/* start of main ptype */}
// //       <Box
// //         sx={{
// //           width: "100%",
// //           height: "90vh",
// //           backgroundColor: "#ffffff",
// //           display: "flex",
// //           flexDirection: "column",
// //           margin: "5px auto 5px auto",
// //         }}
// //       >
// //         <Box sx={{ color: "#4F62B0", marginTop: "5px", marginLeft: "20px" }}>
// //           <Typography>Publication Management</Typography>
// //         </Box>
// //         <Box
// //           sx={{
// //             width: "97%",
// //             height: "90vh",
// //             backgroundColor: "#E1E5F8",
// //             display: "flex",
// //             flexDirection: "column",
// //             margin: "15px auto 10px auto",
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               margin: "0.5%",
// //               flexGrow: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <Box
// //               sx={{
// //                 width: "100%",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}
// //             >
// //               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
// //                 <Tabs
// //                   value={value}
// //                   onChange={handleChange}
// //                   aria-label="basic tabs example"
// //                   margin="10px 10px auto auto"
// //                   backgroundColor="white"
// //                   sx={{
// //                     margin: "0px auto auto 10px",
// //                     backgroundColor: "#ffffff",
// //                   }}
// //                 >
// //                   <Tab label="Template " className="tab1" value={0} />
// //                   <Tab label="Issue " />
// //                   {/* <Tab></Tab> */}
// //                 </Tabs>

// //                 {/* 1st tab */}
// //                 {value === 0 && (
// //                   <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
// //                     <Grid container spacing={2} justify="center">
// //                       <Grid item xs={8}>
// //                         <SearchTemplate find={"Find Content"} data2={templateName} setData={setTemplateName} />
// //                       </Grid>
// //                       <Grid item xs={12}>
// //                         <Item
// //                           sx={{
// //                             display: "flex",
// //                             flexDirection: "row",
// //                             justifyContent: "space-between",
// //                             backgroundColor: "#4F62B0",
// //                             color: "white",
// //                           }}
// //                         >
// //                           <Box sx={{ width: "50%", textAlign: "left" }}>
// //                             <Typography>Template Name </Typography>
// //                           </Box>
// //                           <Box sx={{ width: "50%", textAlign: "left" }}>
// //                             <Typography>Material type</Typography>
// //                           </Box>
// //                         </Item>
// //                       </Grid>

// //                       <Box
// //                         sx={{
// //                           display: "flex",
// //                           width: "100%",
// //                           justifyContent: "flex-end",
// //                           margin: "16px auto  5px 16px",
// //                           height: "35vh",
// //                           overflow: "scroll ",
// //                           overflowX: "hidden",
// //                           scrollbarWidth: "thin",
// //                           "&::-webkit-scrollbar": {
// //                             width: "0.4em",
// //                           },
// //                           "&::-webkit-scrollbar-track": {
// //                             background: "#E1E5F8",
// //                           },
// //                           "&::-webkit-scrollbar-thumb": {
// //                             backgroundColor: "#888",
// //                           },
// //                           "&::-webkit-scrollbar-thumb:hover": {
// //                             background: "#555",
// //                           },
// //                         }}
// //                       >
// //                         <Grid container spacing={1}>
// //                           {templates.map((item, index) => (
// //                             <IssueManagementComponent
// //                               template_id={item.template_id}
// //                               templateTitle={item.template_name}
// //                               type={Object.values(item.types).join(", ")}
// //                             />
// //                           ))}
// //                         </Grid>
// //                       </Box>

// //                       {/* button */}
// //                       <Box
// //                         display="flex"
// //                         // margin={2}
// //                         justifyContent="flex-end"
// //                         sx={{ width: "100%" }}
// //                         onClick={NewTemplatee}
// //                       >
// //                         <AddButton buttonTitle={"+ Add Content"} />
// //                       </Box>
// //                     </Grid>
// //                   </Box>
// //                 )}

// //                 {/* 2nd tab */}
// //                 {value === 1 && (
// //                   <Box sx={{ margin: "0.5%", flexGrow: 1 }}>
// //                     <Grid container spacing={2} justify="center">
// //                       <Grid item xs={8}>
// //                         <SearchIssue find={"Find Issues"} data2={issues} setData={setIssues} />
// //                       </Grid>
// //                       <Grid item xs={12}>
// //                         <Item
// //                           sx={{
// //                             display: "flex",
// //                             flexDirection: "row",
// //                             justifyContent: "space-between",
// //                             backgroundColor: "#4F62B0",
// //                             color: "white",
// //                           }}
// //                         >
// //                           <Box sx={{ width: "25%", textAlign: "left" }}>
// //                             <Typography>Issue Name </Typography>
// //                           </Box>
// //                           <Box sx={{ width: "25%", textAlign: "center" }}>
// //                             <Typography>Date</Typography>
// //                           </Box>
// //                           <Box sx={{ width: "25%", textAlign: "left" }}>
// //                             <Typography>Content Type </Typography>
// //                           </Box>
// //                           <Box sx={{ width: "25%", textAlign: "left" }}>
// //                             <Typography>Status</Typography>
// //                           </Box>
// //                         </Item>
// //                       </Grid>

// //                       <Box
// //                         sx={{
// //                           display: "flex",
// //                           width: "100%",
// //                           justifyContent: "flex-end",
// //                           margin: "16px auto  5px 16px",
// //                           height: "35vh",
// //                           overflow: "scroll ",
// //                           overflowX: "hidden",
// //                           scrollbarWidth: "thin",
// //                           "&::-webkit-scrollbar": {
// //                             width: "0.4em",
// //                           },
// //                           "&::-webkit-scrollbar-track": {
// //                             background: "#E1E5F8",
// //                           },
// //                           "&::-webkit-scrollbar-thumb": {
// //                             backgroundColor: "#888",
// //                           },
// //                           "&::-webkit-scrollbar-thumb:hover": {
// //                             background: "#555",
// //                           },
// //                         }}
// //                       >
// //                         <Grid container spacing={1}>
// //                           {issues.map((item, index) => (
// //                             <IssueManagementComponent1
// //                               number={item.issue_name}
// //                               date={item.date}
// //                               type={item.type}
// //                               status={item.status}
// //                               issue_id={item.issue_id}
// //                               templateName={templateName[0].types}
// //                               templateData={templateName[0].template_data}
// //                             />
// //                           ))}
// //                         </Grid>
// //                       </Box>

// //                       {/* button */}

// //                       <Box
// //                         display="flex"
// //                         // margin={2}
// //                         justifyContent="flex-end"
// //                         sx={{ width: "99.5%" }}
// //                       >
// //                         <Link
// //                           to="/IssueManagement"
// //                           style={{ textDecoration: "none" }}
// //                         >
// //                           <AddButton buttonTitle={"+ New Issue"} />
// //                         </Link>
// //                       </Box>
// //                     </Grid>
// //                   </Box>
// //                 )}
// //               </Box>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //       {/* end of main ptype  */}

// //       {/* start of footer */}
// //       <Box
// //         sx={{
// //           left: 0,
// //           bottom: 0,
// //           width: "100%",
// //           height: "10vh",
// //         }}
// //       >
// //         <Footer1 />
// //       </Box>
// //       {open && <NewTemplate open={open} setOpen={setopen} />}
// //       {/* // end of footer */}
// //     </Box>
// //   );
// // }

// import { React, useEffect, useState } from "react";
// import { Box, Typography, TextField } from "@mui/material";
// // import Navbar from "../Components/Navbar";
// import Header from "../Components/HeaderBar";
// import Footer1 from "../Components/Footer";
// // import Footer1 from "../Components/Footer1";

// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// // import Scroll from "@mui/material/Grid";
// // import { textAlign } from "@mui/system";
// // import edit from "../assets/dashboard/edit.png";
// // import frame from "../assets/dashboard/frame.png";
// // import search from "../assets/dashboard/search.png";
// // import Dashboard from "./Dashboard";
// // import "../styles/Issuemanagement1.css";
// import IssueManagementComponent from "../Components/IssueManagementComponent";
// import IssueManagementComponent1 from "../Components/IssueManagementComponent1";
// import SearchBox from "../Components/SearchBox";
// import NewTemplate from "../Pop Up/NewTemplate";

// import AddButton from "../Components/AddButton";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SearchTemplate from "../Components/SearchTemplate";
// import SearchIssue from "../Components/SearchIssue";
 import {Switch} from "antd";

// const data = [
//   { templateTitle: "टेम्प्लेट 1", type: "चौकस चौरस , गप्पाटप्पा" },
//   { templateTitle: "टेम्प्लेट 2", type: "कल्पक, शब्दरंजन " },
//   { templateTitle: "टेम्प्लेट 3", type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा " },
//   { templateTitle: "टेम्प्लेट 4", type: "गोष्टी ,शब्दरंजन" },
//   { templateTitle: "टेम्प्लेट 5", type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा " },
// ];

// const arrayofObjects = [
//   {
//     number: "मे 2023",
//     date: "24/02/2023 ",
//     type: "चौकस चौरस , गप्पाटप्पा ",
//     status: " ",
//   },
//   {
//     number: "एप्रिल 2023",
//     date: "27/04/2023",
//     type: "कल्पक, शब्दरंजन ",
//     status: "मान्यता प्रतीक्षा करत आहे  ",
//   },
//   {
//     number: "मार्च 2023",
//     date: "25/03/2023 ",
//     type: "शब्दरंजन, चौकस चौरस,गप्पाटप्पा  ",
//     status: "मान्यता प्रतीक्षा करत आहे  ",
//   },
//   {
//     number: "फेब्रुवारी 2023",
//     date: "20/02/2023 ",
//     type: "गोष्टी, शब्दरंजन ",
//     status: "अंक मंजूर झाला",
//   },
//   {
//     number: "जानेवारी 2023",
//     date: "22/01/2023 ",
//     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
//     status: "अंक मंजूर झाला ",
//   },
//   {
//     number: "जानेवारी 2023",
//     date: "22/01/2023 ",
//     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
//     status: "अंक मंजूर झाला ",
//   },
//   {
//     number: "जानेवारी 2023",
//     date: "22/01/2023 ",
//     type: "गप्पाटप्पा, चौकस चौरस , गप्पाटप्पा ",
//     status: "अंक मंजूर झाला ",
//   },
// ];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function Issuemanagement1() {
//   const [open, setopen] = useState(false);

//   const NewTemplatee = () => {
//     setopen(!open);
//   };

 

//   const [categories, setCategories] = useState([]);
//   const [templates, setTemplates] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/getalltemplates`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.status) {
//           setTemplates(response.data.data);
//           console.log("templates", response.data.data);
//         }
//       } catch (e) {}
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/getallcategories`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.status) {
//           setCategories(response.data.data);
//           console.log("categories", response.data.data);
//         }
//       } catch (e) {}
//     }
//     fetchData();
//   }, []);

//   const [issues, setIssues] = useState([]);
//   const [templateName, setTemplateName] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [value, setValue] = useState('');


//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     console.log(value); // Print the value in the console
//     setInputValue(value); // Update the state
//   };
  
  
//   const handleAnk = (event) => {
//     setValue(event.target.value);
//   };

//   // const[toggle,setToggle] = useState(false);
//   // const toggler =()=>
//   // {
//   //   toggle ? setToggle(false):setToggle(true);
//   // }

//   const [selectedFile, setSelectedFile] = useState(null);
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//     } else {
//       setSelectedFile(null);
//     }
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/getallissues`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.status) {
//           setIssues(response.data.data);
//           setTemplateName(response.data.template_data);
//           console.log("categories", response.data.data);
//         }
//       } catch (e) {}
//     }
//     fetchData();
//   }, []);

//   return (
//     <Box sx={{ height: "100vh" }}>
//       {/* start of navbar */}
//       <Box
//         sx={{
//           width: "100%",
//           // height: "10vh",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* <Navbar /> */}
//         <Header />
//       </Box>
//       {/* end of navbar */}

//       {/* start of main ptype */}
//       <Box
//         sx={{
//           width: "100%",
//           height: "90vh",
//           backgroundColor: "#ffffff",
//           display: "flex",
//           flexDirection: "column",
//           margin: "5px auto 5px auto",
//         }}
//       >
//         <Box sx={{ color: "#4F62B0", marginTop: "5px", marginLeft: "20px" }}>
//           <Typography>Publication Management</Typography>
//         </Box>
//         <Box
//           sx={{
//             width: "97%",
//             height: "90vh",
//             backgroundColor: "#E1E5F8",
//             display: "flex",
//             flexDirection: "column",
//             margin: "15px auto 10px auto",
//           }}
//         >
//           <Box
//             sx={{
//               width: "20%",
//               display: "flex",
          
//               //marginLeft: 10,
//               flexWrap: "wrap",
//               minWidth: "320px",
//               "@media (max-width:768px)": {
//                 margin: "0px",
//                 justifyContent: "center",
//               },
//             }}
//           >
//             <TextField
//               id="outlined-basic"
//               label="Name"
//               variant="outlined"
//               size="small"
//               type="text" 
//               value={inputValue} 
//               onChange={handleInputChange}  
//               style={{
//                 background: "#FFFFFF",
//                 width: 250,
//                 margin: 20,
//                 borderRadius: "5px",
//               }}
//             />
//           </Box>

//           <Box style={{display:"flex",flexDirection:"row"}}>
//             <Box
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 flexWrap: "wrap",
//                 Left:"20%",
//               }}
//             >
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 style={{ margin: 20 }}
//               />
//               {selectedFile ? (
//                 <div>
//                   {/* <p>Selected File: {selectedFile.name}</p> */}
//                   <img
//                     src={URL.createObjectURL(selectedFile)}
//                     alt="Selected"
//                     style={{ width: 300, margin: 20 }}
//                     size="medium"
//                   />
//                 </div>
//               ) : (
//                 <p style={{ margin: 20 }}>No file chosen</p>
//               )}
//             </Box>

//             <Box
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 flexWrap: "wrap",
//               }}
//             >
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 style={{ margin: 20 }}
//               />
//               {selectedFile ? (
//                 <div>
//                   {/* <p>Selected File: {selectedFile.name}</p> */}
//                   <img
//                     src={URL.createObjectURL(selectedFile)}
//                     alt="Selected"
//                     style={{ width: 300, margin: 20 }}
//                     size="medium"
//                   />
//                 </div>
//               ) : (
//                 <p style={{ margin: 20 }}>No file chosen</p>
//               )}
//             </Box>
                
            
            
//               <Typography  value={value} 
//               onChange={handleAnk} >ताजा अंक</Typography>
            
//               {/* <Switch onClick ={toggler} /> */}
              
//               <Typography value={value} 
//               onChange={handleAnk}>मागील अंक</Typography>
//               {/* {toggle ? <div>Taja</div>:<div>Magil</div>} */}
            
            
                
                
//           </Box>
//         </Box>
//       </Box>
//       {/* end of main ptype  */}

//       {/* start of footer */}
//       <Box
//         sx={{
//           left: 0,
//           bottom: 0,
//           width: "100%",
//           height: "10vh",
//         }}
//       >
//         <Footer1 />
//       </Box>
//       {open && <NewTemplate open={open} setOpen={setopen} />}
//       {/* // end of footer */}
//     </Box>
//   );
// }


import { React, useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  OutlinedInput,
  InputAdornment,
  Stack,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
// import Navbar from "../Components/Navbar";
import Header from "../Components/HeaderBar";
import Footer1 from "../Components/Footer";
// import Footer1 from "../Components/Footer1";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Scroll from "@mui/material/Grid";
// import { textAlign } from "@mui/system";
// import edit from "../assets/dashboard/edit.png";
// import frame from "../assets/dashboard/frame.png";
// import search from "../assets/dashboard/search.png";
// import Dashboard from "./Dashboard";
// import "../styles/Issuemanagement1.css";
import IssueManagementComponent from "../Components/IssueManagementComponent";
import IssueManagementComponent1 from "../Components/IssueManagementComponent1";
import SearchBox from "../Components/SearchBox";
import NewTemplate from "../Pop Up/NewTemplate";

import AddButton from "../Components/AddButton";
import { Link , useHistory } from "react-router-dom";
import axios from "axios";
import SearchTemplate from "../Components/SearchTemplate";
import SearchIssue from "../Components/SearchIssue";
// import { Switch } from "antd";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Issuelist from "./Issuelist";
import SubmitButton from "../Components/SubmitButton";
// import {  } from "react-router-dom";

// import Typography from '@mui/material/Typography';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Issuemanagement1() {
  const [open, setopen] = useState(false);
  const history = useHistory();


  const NewTemplatee = () => {
    setopen(!open);
  };

  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getalltemplates`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setTemplates(response.data.data);
          // console.log("templates", response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallcategories`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          setCategories(response.data.data);
          // console.log("categories", response.data.data);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);

  const [issues, setIssues] = useState([]);
  const [templateName, setTemplateName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [pdfFile , setPdfFile] = useState();

  // const [coverImgFile, setCoverImgFile] = useState();

  // const handleCoverImgChange = (e) => {
  //   setCoverImgFile(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };
  const handlePdfChange=(e)=>{
    setPdfFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  const handleSubmit=async()=>{
    console.log("submitting data", data);
    try {
      console.log(data, "api comming");
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/createissue`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("filesuploading", response.data);
      if (response.status) {
        console.log("your response is", response.data.id);
        let issue_id = response.data.issue_id;
        uploadIssueImgFile(issue_id);
        uploadIssuepdf(issue_id);
      }
      // if(res)
      if (response.status === 200) {
        console.log("issue_id is :", response.data.issue_id);
      }
    } catch (err) {
      console.log(err);
    }
   
  }

  const uploadIssueImgFile = async (issue_id) => {
    console.log("Hello : " + issue_id);

    const data = new FormData();
    data.append("issue_cover_img", coverImgFile);
    data.append("issue_id", issue_id);
    // console.log(issue_id);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadissuecoverimg?issue_id=${issue_id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("asdasd", response.data);
      if (response.data) {
        console.log("navigating to dashboard");
        alert("Plan Created Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };
//  for pdf
const uploadIssuepdf = async (issue_id) => {
  console.log("Hello : " + issue_id);

  const data = new FormData();
  data.append("issue_pdf", pdfFile);
  data.append("issue_id", issue_id);
  // console.log(issue_id);

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/uploadissuepdf?issue_id=${issue_id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("asdasd", response.data);
    if (response.data) {
      console.log("navigating to dashboard");
      alert("Plan Created Successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

const handleStatus=()=>{
  // console.log('status')
  history.push("/issuestatus");

}

// for pdf

  const [coverImgFile, setCoverImgFile] = useState();

  const handleCoverImgChange = (e) => {
    setCoverImgFile(e.target.files[0]);
  };
  const uploadCoverImgFile = async (content_id) => {
    console.log("Hello : " + content_id);

    const data = new FormData();
    data.append("benifit_img", coverImgFile);
    data.append("content_id", content_id);
    console.log(content_id);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/uploadbenifitimage?plan_id=${content_id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("asdasd", response.data);
      if (response.data) {
        console.log("navigating to dashboard");
        alert("Plan Created Successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value); // Print the value in the console
    setInputValue(value); // Update the state
  };

  const handleAnk = (event) => {
    setValue(event.target.value);
  };

  const [issue, setIssue] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getallissues`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log("all issue fetched", response.data.data);
        if (response.data.status) {
          setIssue(response.data.data);
        }
        // console.log(response.data.data);
      } catch (e) {}
    }
    fetchData();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/getallissues`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.data.status) {
  //         setIssues(response.data.data);
  //         setTemplateName(response.data.template_data);
  //         console.log("categories", response.data.data);
  //       }
  //     } catch (e) {}
  //   }
  //   fetchData();
  // }, []);
  const [data, setData] = useState({});

  const handleChange = (key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    console.log(data);
  };

  const handleSubmitissue = async () => {
    console.log("handle submit" , data)
  }
  return (
    <Box sx={{ height: "100vh" }}>
      {/* start of navbar */}
      <Box
        sx={{
          width: "100%",
          // height: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Navbar /> */}
        <Header />
      </Box>
      {/* end of navbar */}

      {/* start of main ptype */}
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          margin: "5px auto 5px auto",
        }}
      >
        <Box sx={{ color: "#4F62B0", marginTop: "5px", marginLeft: "20px" }}>
          <Typography>Issues Management</Typography>
        </Box>
        <Box
          sx={{
            width: "97%",
            height: "90vh",
            backgroundColor: "#E1E5F8",
            display: "flex",
            flexDirection: "column",
            margin: "15px auto 10px auto",
          }}
        > 
        <Box>
        
          <Box sx={{width:'100%' , display:'flex' , flexDirection:'row' , justifyContent:'space-around'}} >

          <Box
            sx={{
              width: "20%",
              display: "flex",

              mx: 7,
              flexWrap: "wrap",
              minWidth: "320px",
              "@media (max-width:768px)": {
                margin: "0px",
                justifyContent: "center",
              },
            }}
          >
            <Typography sx={{mx:2 , color:'#4F62B0'}}>Issue Name</Typography>
            <TextField
              id="outlined-basic"
              label="Enter Issue Name"
              variant="outlined"
              size="small"
              type="text"
              value={data.issue_name}
              onChange={(e) => {
                handleChange("issue_name", e.target.value);
              }}
              style={{
                background: "#FFFFFF",
                width: 250,
                margin: 20,
                mt:2,height:40,
                // borderRadius: "5px",
              }}
            />
            <Typography sx={{mx:2 , color:'#4F62B0'}} >Add Cover Image</Typography>
               <OutlinedInput
              id="outlined-basic"
              type="file"
              label="cover this image"
              placeholder="Cover this Image"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" , m:2 ,height:40, }}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
              onChange={(e) => {
                handleCoverImgChange(e);
              }}
            />
            <Typography sx={{mx:2 , color:'#4F62B0'}} >Add Pdf</Typography>

            <OutlinedInput
              id="outlined-basic"
              type="file"
              label="cover image"
              placeholder="Cover Image"
              size="small"
              sx={{ mt: 2, bgcolor: "white", width: "80%" ,height:40,m:2}}
              endAdornment={
                <InputAdornment position="end">
                  <DriveFolderUploadIcon />
                </InputAdornment>
              }
              onChange={(e) => {
                handlePdfChange(e);
              }}
            />
              {/* <input
                type="file"
                onChange={handleFileChange}
                style={{ margin: 20 }}
              /> */}
            
                <RadioGroup
                row
                // aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',my:2}}
                name="row-radio-buttons-group"
                value={data.status}
                onChange={(e) => {
                  handleChange("status", e.target.value);
                }}
                onClick={(e) => {
                    e.stopPropagation();
                  }}
              >
                {/* <Typography sx={Styles.gender}>Gender</Typography> */}
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="ok"
                  control={<Radio />}
                  label="मागील अंक"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="active"
                  control={<Radio />}
                  label="ताजा अंक"
                />
                 <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "MontserratRegular",
                    },
                    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#4F62B0" },
                  }}
                  value="deactive"
                  control={<Radio />}
                  label="ड्राफ्ट"
                />
              </RadioGroup>
              <Button onClick={()=>{handleSubmit()}}>
            <SubmitButton buttonTitle={"Creater Pdf"} />
          </Button>
            </Box>
            {/* <OutlinedInput
                  id="outlined-basic"
                  type="file"
                  label="cover image"
                  placeholder="Cover Image"
                  size="small"
                  sx={{ mt: 2, bgcolor: "white", width: "80%" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <DriveFolderUploadIcon />
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    handleCoverImgChange(e);
                  }}
                />
                 */}
            
            
              {/* <Typography  value={value} 
              onChange={handleAnk} >ताजा अंक</Typography> */}
            
             {/* // <Switch onChange={handleToggleChange} /> */}
              
              {/* <Typography value={value} 
              onChange={handleAnk}>मागील अंक</Typography> */}
              {/* {toggle ? <div>Taja</div>:<div>Magil</div>} */}
            
            
                
                
          <Box sx={{width:'25%' , height:500 , border:1,m:2 , display:'flex' , justifyContent:'center' , alignItems:"center" , flexDirection:'column',overflowY:'scroll' }} >
            {issue.map((item) => (
              <Box sx={{width:300 ,height:300,my:3 , display:'flex' , justifyContent:'center', alignItems:'center'}} >
                  <Issuelist data={item} />
            </Box>
            ))}
            

        </Box>
          </Box>
      </Box>
          </Box>       
        </Box>

      {/* end of main ptype  */}

      {/* start of footer */}
      <Box
        sx={{
          left: 0,
          bottom: 0,
          width: "100%",
          height: "10vh",
        }}
      >
        <Footer1 />
      </Box>

      {/* // end of footer */}
    </Box>
  );
}