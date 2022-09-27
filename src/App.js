
import { Grid}  from '@mui/material';
import { Container } from '@mui/system';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from './Components/Project';
import Contact from './Components/Contact';
import Education from './Components/Education';
import About from './Components/About';
import Skills from './Components/Skills';
const NotFound = () => <div>Not found</div>;

function App() {
  return (
    <Container className='margin_top'> 
      <Grid container >
        <Grid item xs={12} sm={12} md={2} lg={3} >
          <Profile/>
        </Grid>
        <Grid item lg >
          <BrowserRouter>
			<Header />
      <div className='grid_center'>
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/Education" element={<Education />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Projects" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
				<Route path="*" element= {<NotFound/>} />
			</Routes>
      </div>
		</BrowserRouter>
          <Footer/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
