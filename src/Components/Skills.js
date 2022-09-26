import React from 'react'
import '../../src/App.css'
import CustomizedProgressBars from './Progrssbar';

const Skills = () => {
  return (
    <div style={{padding:'40px'}}>
      <CustomizedProgressBars title='HTML' value='85' />
      <CustomizedProgressBars title='CSS' value='70' />
      <CustomizedProgressBars title='React' value='50' />
      <CustomizedProgressBars title='Power BI' value='60' />
    </div>
  )
}

export default Skills;