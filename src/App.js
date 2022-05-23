import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { CoinList, Home, Wallet } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<CoinList/>} />
        <Route path='/wallet' element={<Wallet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
