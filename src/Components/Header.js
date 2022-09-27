import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import ProfileData from '../../src/ProfileData';

const pages = ['Education','Skills', 'Projects', 'Contact'];

const Header = () => {
  
  return (
    <AppBar position="static" style={{background:'#b2e342',marginLeft:'15px',borderRadius:'5px', width:'110vh'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{marginLeft:'-23px'}}>
          <Link component={RouterLink} to='/' style={{textDecoration:'none'}}>
            <Button sx={{  color: 'white', display: 'inline',background:'#8BD706', 
          maxHeight:'70px',maxWidth:'70px',minHeight:'70px',minWidth:'70px',marginRight:'25px'}}>
            <HomeIcon sx={{ fontSize:'35px', color:'black'}}/>

            </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((Page) => {
            let toPath = Page;
            if(Page === "Skills") { toPath="/Skills"};
            if(Page === "Education") { toPath="/Education"};
            if(Page === "Projects") {toPath="/Projects"};
             if(Page === "Contact") {toPath="/Contact" };
            return(
              <Link component={RouterLink} to={toPath} key={Page} style={{textDecoration:'none'}}>
              <Button
                key={Page}
                sx={{ my: 2, color: 'black', display: 'block' , fontSize : '15px', fontWeight:'600'}}>
                {Page}
              </Button>
              </Link>
            )})}
          </Box>
          <Box>
          {Object.keys(ProfileData.socials).map((key)=>(
              <a href={ProfileData.socials[key].link} target={'blank'} style={{textDecoration:'none'}}> {ProfileData.socials[key].icon}</a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;
