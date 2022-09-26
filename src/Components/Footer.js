import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_right'>
        <Typography className='footer_name'>
          Shweta Sidnal 

        </Typography>

      </div>
      <div className='footer_left'>
        <Typography className='copyright'>
          All the rights reserved.Designed and Developed by 
          <a href='/' target='blank'>Tech Pundits Info Systems</a>


        </Typography>

      </div>
    </div>
  )
}

export default Footer