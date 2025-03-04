import React from 'react'
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import edit from '../Images/edit.png';
import frame from '../Images/frame.png';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function BenefitManagementComponent2(props) {
  const {benefit} = props;
  return (
      <Grid item xs={12}>
                <Item sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FFFFFF',color:"#4F62B0"}}>
                    <Box sx={{width:"50%",textAlign:"left",display:"flex",flexDirection:"row"}}>
                    <img src={edit} width="17.17px" height="17.17px" alt="SVG" style={{ paddingLeft:"10px",paddingRight:"10px" }} />
                    <img src={frame} width="17.17px" height="17.17px" alt="SVG" style={{ paddingLeft:"10px",paddingRight:"10px" }}/>
                    <Typography>{benefit}</Typography>
                    </Box>
                </Item>
    </Grid>
  )
}
