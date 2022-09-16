// import { Container } from "react-bootstrap";
// import Search from "./components/Search";
// import Results from "./components/Results";
// import { useState } from "react";
// import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </>
  );
}

export default App;
