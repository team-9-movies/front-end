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

  // const server = process.env.REACT_APP_SERVER;

  // const {
  //   // isLoading,
  //   isAuthenticated,
  //   // error,
  //   user,
  //   // loginWithRedirect,
  //   // logout,
  // } = useAuth0();

  // const [searchInput, setSearchInput] = useState('');
  // const [results, setResults] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [isReviewed, setIsReviewed] = useState(false);
  // const [isUser, setIsUSer] = useState(false);

  // const handleSearchSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try{
  //     const response = await fetch(`${server}/movie?searchQuery=${searchInput}`, {
  //       method: 'get'
  //     })
  
  //     const banana = await response.json();
  //     setResults(banana);
  //   } catch (err) {
  //     console.log(`Error: ${err}`)
  //   }
  // }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
      {/* <Container>
        <Search setSearchInput={setSearchInput} handleSearchSubmit={handleSearchSubmit}/>
        <Results results={results} isAuthenticated={isAuthenticated} user={user}/>
      </Container>
      <Container>
        <Favorites setMovies={setMovies} movies={movies} isAuthenticated={isAuthenticated} user={user} results={results}/>
      </Container> */}
    </>
  );
}

export default App;
