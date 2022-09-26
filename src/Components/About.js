import { Typography } from '@mui/material';
import React from 'react'
import '../../src/App.css'

const About = () => {
  return (
    <div className='about_container'> 
      <div className='span_container'>
      <Typography className='about_title'> About Me</Typography>
        <span></span>
        
      </div>
      <div className='about_content'>
        <ul>
          <li>An innovative and knowledgeable professional having 6 years of experience as a lecturer in Computer Science and Engineering and Training</li>
          <li>Good interpersonal and organizational skills, with an ability to work both independently and collaboratively.</li>
          <li>Have completed training on MS power BI tool </li>
          <li>Good knowledge in understanding of DAX functions. </li>
          <li>Have good analytical skills with ability to collect,organize and analyze data. </li>
        </ul>

      </div>
    </div>
  )
}

export default About;