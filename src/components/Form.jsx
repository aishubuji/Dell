import React from "react"
import  TextField  from "@mui/material/TextField"

const Form = () => {
    return (
        <>
        <TextField size='small'label='USN' placeholder="Enter your USN"/>
        <TextField size='small'label='Name' placeholder="Enter your Name"/>
        <TextField size='small'label='College' placeholder="Enter your College"/>
        <TextField size='small'label='city' placeholder="Enter your city"/>
        </>
    )
}

export default Form;