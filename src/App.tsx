import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { GameSpace } from './components/GameSpace/GameSpace';
import { PagesRoutes } from './routers';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PagesRoutes.Home} element={<Home />} />
        <Route path={PagesRoutes.GameSpace} element={<GameSpace />} />
      </Routes>
    </div>
  );
}

export default App;
