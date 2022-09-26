import { Typography } from '@mui/material';
import React from 'react'
import '../../src/App.css'
import ProfileData from '../../src/ProfileData'

const Contact = () => {
  return (
    <div className='about_container'> 
    <div className='span_container'>
    <Typography className='about_title'> Contact information</Typography>
      <span></span>
      
    </div>
    <div className='about_content'>
     <Typography className='contact_title'><span className='span_title'>Email:</span> {ProfileData.email} </Typography>
     <Typography className='contact_title'><span className='span_title'>Contact No:</span> {ProfileData.contact} </Typography>
      <Typography className='contact_title'><span className='span_title'>Address:</span> {ProfileData.adress} </Typography>
      <Typography className='contact_title'> 
        {Object.keys(ProfileData.socials).map((key)=>(
              <a href={ProfileData.socials[key].link} target={'blank'} style={{textDecoration:'none'}}> {ProfileData.socials[key].icon}</a>
            ))}
      </Typography>
      
     

    </div>
  </div>
  )
}

export default Contact;