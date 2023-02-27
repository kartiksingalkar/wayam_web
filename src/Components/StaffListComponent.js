import React from 'react'
import { Box,Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import edit from '../Images/edit.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function StaffListComponent(props) {
  const { username, email, mobileno} = props;
  return (
    <Box sx={{backgroundColor:"#E1E5F8"}}>
    <Grid item xs={12} sx={{margin:1,backgroundColor:"#E1E5F8"}}>
            <Item sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FFFFFF',color:"#4F62B0"}}>
                <Box sx={{width:"30%",textAlign:"center",display:"flex",flexDirection:"row"}}>
                <img src={edit} width="17.17px" height="17.17px" alt="SVG" style={{  paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",}} />
                <Box width="17.17px" height="17.17px" alt="SVG" sx={{ paddingLeft:"10px",paddingRight:"10px",justifyContent:'center' }}><AccountCircleIcon/></Box>
                <Typography>{username}</Typography>
                </Box>
                <Box sx={{textAlign:"center", width:"30%",display:"flex",flexDirection:"row"}} ><Typography>{email}</Typography></Box>
                <Box minWidth="300px" sx={{textAlign:"center", width:"30%",display:"flex",flexDirection:"row"}} ><Typography>{mobileno}</Typography></Box>
            </Item>
    </Grid>
    </Box> 
  )
}
