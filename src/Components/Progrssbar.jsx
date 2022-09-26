import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#9acd32' : '#308fe8',
  },
}));


function CustomizedProgressBars({value,title}) {
  return (
    <Box sx={{ flexGrow: 1}}>
        <Typography style={{fontWeight:'800',fontFamily:'Garamond',fontSize:'25px',marginBottom:'-15px'}}> {title}</Typography>
        <Typography style={{fontWeight:'800',fontFamily:'Garamond',fontSize:'20px',marginBottom:'-15px',marginLeft:'300px'}}> {value} %</Typography>
      <br />
      <BorderLinearProgress  style={{marginBottom:'40px'}}variant="determinate" value={value} />
    </Box>
  );
}

export default CustomizedProgressBars;
