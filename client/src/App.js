import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import FinalNav from './components/Nav/FinalNav'

import Header from './components/Home/Header.js'; 
import Presentation from './components/Home/Presentation.js'; 
import Projects from './components/Home/Projects.js'; 
import Footer from './components/Home/Footer.js'; 

 
function App() {
  return (
    <BrowserRouter>
        <FinalNav/>
        <Header />
        <Presentation />
        <Projects />
        <Footer />
    </BrowserRouter>
  );
}
 
export default App;