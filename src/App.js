import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accommodations from './components/Accommodations';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Accommodations />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
