import React from 'react'
import BasicTimeline from '../Timeline/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import { CustomTimeline } from '../Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import ProfileData from '../ProfileData';
import '../App.css'

const Education = () => {
  const BasicTimelineItem =({title,text1,text2,text3}) =>(
    <TimelineItem >
      <CustomTimeline/>
        <TimelineContent>
          <Typography className='edu_title'>{title}</Typography>
          <Typography>{text1}</Typography>
          <Typography>{text2}</Typography>
          <Typography>{text3}</Typography>
        </TimelineContent>

    </TimelineItem>
  )
  return (
    <div className='Education_container'>
    <BasicTimeline icon={<SchoolIcon/>} title='Educational Background'>
    {Object.keys(ProfileData.education).map((key)=>(
              <BasicTimelineItem title={ProfileData.education[key].title} text1={ProfileData.education[key].date} text2={ProfileData.education[key].description} text3={ProfileData.education[key].marks} />
    ))}

    </BasicTimeline>
    </div>
  )
}

export default Education;