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
        <Home />
        <Accommodations />
        <Routes>
          <Route path="/room/:roomId" element={<Rooms />} /> 
        </Routes>
        
        <Showcase />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;