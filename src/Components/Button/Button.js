import React from 'react'
import Button from '@mui/material/Button';
import './Button.css'

const CustomButton = ({icon,text}) => {
  return (
    <Button variant="contained" className='ctm_btn' 
    endIcon={ icon? <div className='icon_container'>{icon}</div> : null}><span className='btn_text'>{text}</span></Button>
  )
}

export default CustomButton;