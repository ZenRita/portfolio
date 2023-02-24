import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import MovieDetail from "./Pages/MovieDetail";
import TvPage from "./Pages/TvPage";
import TvDetail from "./Pages/TvDetail";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/tv" element={<TvPage />}/>
              <Route path="/movie/:id" element={<MovieDetail />}/>
              <Route path="/tv/:id" element={<TvDetail />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
