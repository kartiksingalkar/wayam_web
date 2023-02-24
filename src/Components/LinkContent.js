import { Box } from '@mui/material'
import React from 'react'

export default function LinkContent(props) {
  return (
    <Box sx={{display:'flex' ,  flexDirection:"row"}} >
 
      <p style={{color:'#4F62B0'}}>{props.link_title1}</p>
    
      <p style={{color:'#4F62B0'}}>{props.link_title2}</p>
     
      </Box>
   
  )
}
