import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import SıgnInPage from './Pages/SıgnInPage';
import Shop from './Pages/Shop';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SıgnInPage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
