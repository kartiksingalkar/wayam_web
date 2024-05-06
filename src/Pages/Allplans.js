import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Updateplan from './Updateplan'

export default function Allplans(props) {
    // console.log(props)
    const [img, setImg] = useState();

    useEffect(() => {
      async function fetchiData() {
        try {
          let plan_id = props.plans.plan_id;
          console.log("the id after is", plan_id);
  
          const response = await axios(
            `${process.env.REACT_APP_API_URL}/getplanimage?plan_id=${plan_id}`,
            {
              method: "GET",
              responseType: "blob",
            }
          );
          console.log("the image", response.data);
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
    const handleplan = (plans) => {
        // console.log(plans)
      setopenncpop(!openncpop);

    }
    const [openncpop, setopenncpop] = useState(false);
    // const opennewcontentpop = () => {
    // };
  
  
  return (
    <Box sx={{width:150 ,  height:'100%',display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column', backgroundColor:'#E1E5F8',boxShadow:5,my:0.1}} onClick={()=>handleplan(props.plans)} >
<img src={img} alt="plan" style={{width:100 , height:100,marginTop:1}} />
<Typography sx={{fontSize:16 , fontWeight:200 ,m:1 , color:'#4F62B0'}} >{props.plans.plan_name}</Typography>
{openncpop && (
        <Updateplan
          data={props.plans}
        //   setData={setData}
        
          open={openncpop}
          setOpen={setopenncpop}
        />
      )}
          </Box> 
  )
}
