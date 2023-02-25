import * as React from 'react';
import Button from '@mui/material/Button';

export default function SubmitButton(props) {
  const { buttonTitle} = props;

  return (
    <>
      <Button sx={{width:"450px", height:"50px",color:"white", backgroundColor:"#4F62B0"}} variant="contained">{buttonTitle}पक्के करा</Button>
    </>
  );
}