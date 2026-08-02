import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accommodations from './components/Accommodations';
import Showcase from './components/Showcase';
import Rooms from './components/Rooms';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Accommodations />
      <Showcase />
      <Rooms />
      <Footer />
    </div>
  );
}

export default App;
