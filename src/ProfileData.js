import React from 'react' ;
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default
{
    name: 'Shweta Sidnal',
    title: 'Trainee Software Engineer',
    birthday:'05th May 1992',
    email:'shweta.sidnal@gmail.com',
    contact:'+91-5654752498',
    adress: 'Tech pundits info systems LLP \n Naagarabaavi Village Public Park, 53/3 \n 2nd floor Manikanta complex, Main Rd \n near sky walk, Vijay nagar, Stage 2 \n Naagarabhaavi, Bengaluru, Karnataka 560072',
    socials :{
        facebook:{
            link:"https://www.facebook.com",
            icon:<FacebookIcon/>,
            text:"Facebook"
        },
        linkedin:{
            link:"https://www.linkedin.com",
            icon:<LinkedInIcon/>,
            text:"Linkedin"
        }

    },
    education:{
        master:{
        title:'Master of Technology(Computer Science and Engineering)',
        date:'2017',
        description:'Visvesvaraya Technological University, Belgaum',
        marks: '74% '
    },
    bachelor:{
        title:'Bachelor of Engineering(Computer Science and Engineering)',
        date:'2013',
        description:'Visvesvaraya Technological University, Belgaum',
        marks: '71% '
    },
    puc:{
        title:'PUC(12th)',
        date:'2011',
        description:'SDM PU College,Dharwad',
        marks: '80% '
    },
    sslc:{
        title:'High School(10th)',
        date:'2009',
        description:'JNV,Belgaum',
        marks: '84% '
    }
},
 
  projects:{
    project1:{
        title:'Student Application',
        link:'https://github.com/'
    },
    Project2:{
        title:'Todo Application',
        link:'https://github.com/'
    },
    Project3:{
        title:'Resume',
        link:'https://github.com/'
    }

  }

}