// import React from 'react';
// import './App.css';
// import Header from './components/header/Header';
// import Home from './pages/home/Home';
// import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import MovieList from './components/movielist/MovieList';
// import Movie from './pages/moviedetail/Movie';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Routes> 
//           <Route path='/IMDB-Clone' index element={<Home />}></Route>
//           <Route path="movie/:id" element={<Movie />}></Route>
//           <Route path="movies/:type" element={<MovieList />}></Route>
//           <Route path="/*" element={<h1>Error Page</h1>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import './components/header/Header';
import './index.css';
import './App.css';
import Header from "./components/header/Header";
import Box from "./components/Box/Box";


const App = () => {
  return (
  <div className="rounded-xl border-2 border-white py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
    <Header /> //Header Component for challenge 19 of Scaler Challenge
    <Box />
  <Home />
  <Box />
  </div>
  )
};

export default App;