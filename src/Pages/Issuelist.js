import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateIssue from './UpdateIssue';

export default function Issuelist(props) {
    // console.log(props.data)
    const [img, setImg] = useState();

    useEffect(() => {
      async function fetchiData() {
        try {
          let plan_id = props.data.issue_id;
          // console.log("the id after is", plan_id);
  
          const response = await axios(
            `${process.env.REACT_APP_API_URL}/issuecoverimg?issue_id=${plan_id}`,
            {
              method: "GET",
              responseType: "blob",
            }
          );
          // console.log("the image", response.data);
          const fileReaderInstance = new FileReader();
          fileReaderInstance.readAsDataURL(response.data);
          fileReaderInstance.onload = () => {
            const base64data = fileReaderInstance.result;
            setImg(base64data);
            // console.log("got the image",base64data)
          };
        } catch (error) {
          console.error("asA", error);
        }
      }
  
      fetchiData();
    }, []);
    const handleissue = (data) => {
      // console.log('issue',data)
    setopenncpop(!openncpop);

  }
  const [openncpop, setopenncpop] = useState(false);
  return (
    <Box sx={{width:200 , height:200, border:1, display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'center'}} onClick={()=>handleissue(props.data)} >
<img src={img} alt="image not found" style={{width:150 , height:150,marginTop:1}} />

        <Typography>{props.data.issue_name}</Typography>
        {openncpop && (
        <UpdateIssue
          data={props.data}
        //   setData={setData}
        
          open={openncpop}
          setOpen={setopenncpop}
        />
      )} 
    </Box>
  )
}
