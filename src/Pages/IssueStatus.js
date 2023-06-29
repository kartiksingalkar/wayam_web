import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from "../Components/HeaderBar";
import wayamLogo from '../Images/wayamLogo.png'

const checkedBoolean = {
    "Not Started": false,
    "In Progress": false,
    "Completed": false,
}
export default function IssueStatus() {
    const [checkedBox, setCheckedBox] = useState(checkedBoolean);

   const handleInterestCheckbox=(event)=>{
        setCheckedBox(checkedBoolean)
        setCheckedBox({[event.target.value]: event.target.checked,})
    }
    return (
        <Box>
            <Header />
            <Box sx={{ width: '100%', my: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Box sx={{ width: '85%', height: 50, border: 1, display: 'flex', flexDirection: 'row' }} >
                    <Box sx={{ width: '45%', height: '100%', border: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography>Issue List</Typography>
                    </Box>
                    <Box sx={{ width: '25%', height: '100%', border: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography>Make 'ताजा अंक'</Typography>
                    </Box>
                    <Box sx={{ width: '25%', height: '100%', border: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography>make 'मागील अंक'</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: '85%', border: 1, height: '100%', display: 'flex', flexDirection: 'row' }} >
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }} >
                        <Box sx={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Box>
                                <img src={wayamLogo} alt='image' height={10} width={10} />
                            </Box>
                        </Box>
                        <Box sx={{ width: '50%', border: 1 }} >
{/* 
                            <FormControl sx={{ width: '100%' }}  >

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{ width: '100%', border: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}

                                >
                                    <FormControlLabel sx={{}} value="active" control={<Radio />} label="ताजा अंक" />
                                    <FormControlLabel value="ok" control={<Radio />} label="मागील अंक" />

                                </RadioGroup>
                            </FormControl>
                        </Box> */}
                        <FormControlLabel
                        sx={{width:'33%'}}
            control={
                <Checkbox
                    checked={checkedBox["Not Started"]}
                    value="Not Started"
                    onChange={(event) =>
                        handleInterestCheckbox(event)
                    }
                />
            }
            label="Not Started"
        />  
        <FormControlLabel
                        sx={{width:'30%'}}

            control={
                <Checkbox
                    checked={checkedBox["In Progress"]}
                    value="In Progress"
                    onChange={(event) =>
                        handleInterestCheckbox(event)
                    }
                />
            }
            label="In Progress"
        />  
        <FormControlLabel
                        sx={{width:'30%'}}

            control={
                <Checkbox
                    checked={checkedBox["Completed"]}
                    value="Completed"
                    onChange={(event) =>
                        handleInterestCheckbox(event)
                    }
                />
            }
            label="Completed"
        />  



                    </Box>

                </Box>

            </Box>
            </Box>




        </Box>
    )
}
