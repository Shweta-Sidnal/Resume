import React from 'react'
import BasicTimeline from '../Timeline/Timeline';
import TaskIcon from '@mui/icons-material/Task';
import { CustomTimeline } from '../Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import ProfileData from '../ProfileData';
import '../App.css';

const Project = () => {
  const BasicTimelineItem =({title,text,link}) =>(
    <TimelineItem >
      <CustomTimeline/>
        <TimelineContent >
          <Typography className='project_title'>{title}</Typography>
          <Typography> <a href={link} target='blank'>{text}</a></Typography>
        </TimelineContent>

    </TimelineItem>
  )
  return (
    <div><div className='Education_container'>
    <BasicTimeline icon={<TaskIcon/>} title='Projects Done'>
    {Object.keys(ProfileData.projects).map((key)=>(
              <BasicTimelineItem title={ProfileData.projects[key].title} text={ProfileData.projects[key].title} link={ProfileData.projects[key].link}/>
            ))}

    </BasicTimeline>
    </div></div>
  )
}

export default Project;