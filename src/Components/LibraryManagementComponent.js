import React from 'react'
import { Box, Container, TextField, Button, Typography } from "@mui/material";
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


export default function LibraryManagementComponent(props) {
  const { name, type, authorName} = props;
  return (
      <Grid item xs={12}>
                <Item sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FFFFFF',color:"#4F62B0"}}>
                    <Box sx={{width:"33%",textAlign:"center",display:"flex",flexDirection:"row"}}>
                    <img src={edit} width="17.17px" height="17.17px" alt="SVG" style={{ paddingLeft:"10px",paddingRight:"10px" }} />
                    <img src={frame} width="17.17px" height="17.17px" alt="SVG" style={{ paddingLeft:"10px",paddingRight:"10px" }}/>
                    <Typography>{name}</Typography>
                    </Box>
                    <Box sx={{textAlign:"center", width:"33%"}} ><Typography>{type}</Typography></Box>
                    <Box sx={{textAlign:"center", width:"33%"}} ><Typography>{authorName}</Typography></Box>
                </Item>
    </Grid>
  )
}
