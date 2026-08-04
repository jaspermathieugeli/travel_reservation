import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accommodations from './components/Accommodations';
import Rooms from './components/Rooms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        {/* Everything inside Routes is swappable "pages" */}
        <Routes>
          
          {/* Page 1: The Home Page */}
          <Route path="/" element={
            <>
              <Home />
              <Accommodations />
              <Showcase />
            </>
          } />
          
          {/* Page 2: The Specific Room Page */}
          <Route path="/room/:roomId" element={<Rooms />} /> 
          
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;