import { Typography } from '@mui/material';
import React from 'react'
import BasicTimeline from '../../Timeline/Timeline';
import './Profile.css'
import ProfileData from '../../ProfileData';
import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import {CustomTimeline} from '../../Timeline/Timeline'
import CustomButton from '../Button/Button';
import GetAppIcon from '@mui/icons-material/GetApp';

const Profile = () => {
  const BasicTimelineItem =({title,text,link}) =>(
    <TimelineItem >
      <CustomTimeline/>
        <TimelineContent className='timeline_content'>
          {link ? (<Typography className='timeline_text'><span> {title}:</span>{""}<a href={link} target='blank'>{text}</a></Typography>) 
          :(<Typography className='timeline_text'> <span>{title}:</span>{text}</Typography>)}
        </TimelineContent>

    </TimelineItem>

  )
  return (
    <div className='profile_container'>
        <div className='profile_name'>
            <Typography className='name'> {ProfileData.name}</Typography>
            <Typography className='title'> {ProfileData.title}</Typography>
        </div>
        <div>
          <figure className='profile_image'>
            <img src={require('../../Images/1661333740499.jpg')} alt='' />
          </figure>
        </div>
        <div className='profile_timeline'>
          <BasicTimeline icon={<PersonIcon/>}>
            <BasicTimelineItem title='Name' text={ProfileData.name}/>
            <BasicTimelineItem title='Email' text={ProfileData.email}/>
            <BasicTimelineItem title='Birthdate' text={ProfileData.birthday}/>
            {Object.keys(ProfileData.socials).map((key)=>(
              <BasicTimelineItem title={ProfileData.socials[key].icon} text={ProfileData.socials[key].text} link={ProfileData.socials[key].link}/>
            ))}
         </BasicTimeline>
          <br/>
          <div className='btn_container'>
            <a href=" https://www.facebook.com/" target='_blank' style={{textDecoration:'none'}}>
          <CustomButton text={'Download CV'} icon={<GetAppIcon/>}  />
          </a>
          </div>
        
        </div>
    </div>
    )
}

export default Profile;