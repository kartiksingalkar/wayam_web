import * as React from 'react';
import Button from '@mui/material/Button';

export default function AddButton(props) {
  const { buttonTitle} = props;

  return (
    <>
      <Button sx={{color:"white", backgroundColor:"#4F62B0"}} variant="contained">{buttonTitle}</Button>
    </>
  );
}