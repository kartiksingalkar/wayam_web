import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Updatebanner from './Updatebanner'

export default function Allbaners(props) {
    // console.log(props.plan.id)
    const [img, setImg] = useState();

    useEffect(() => {
      async function fetchiData() {
        try {
          let plan_id = props.plan.id;
          console.log("the id after is", plan_id);
  
          const response = await axios(
            `${process.env.REACT_APP_API_URL}/getallbannerimg?id=${plan_id}`,
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
            console.log("got the image",base64data)
          };
        } catch (error) {
          console.error("asA", error);
        }
      }
  
      fetchiData();
    }, []);
    const handleplan = (plan) => {
        console.log(plan)
      setopenncpop(!openncpop);

    }
    const [openncpop, setopenncpop] = useState(false);
    // const opennewcontentpop = () => {
    // };
  
  
  return (
    <Box sx={{width:150 ,  height:'100%',display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column', backgroundColor:'#E1E5F8',boxShadow:5,my:0.1 , flexWrap:'wrap'}} onClick={()=>handleplan(props.plan)} >
<img src={img} alt="plan" style={{width:100 , height:100,marginTop:1}} />
<Box style={{width:'80%',overflow:'hidden'}}>
<Typography sx={{fontSize:16 , fontWeight:200  , color:'#4F62B0',}} >{props.plan.name}</Typography>
</Box>
{openncpop && (
        <Updatebanner
          data={props.plan}
        //   setData={setData}
        
          open={openncpop}
          setOpen={setopenncpop}
        />
      )}
          </Box> 
  )
}
