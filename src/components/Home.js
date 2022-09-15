import React from 'react'
import { Container } from "react-bootstrap";
import Search from "./Search";
import Results from "./Results";
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";

const Home = () => {
  const server = process.env.REACT_APP_SERVER;
  const {
    // isLoading,
    isAuthenticated,
    // error,
    user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/movie?searchQuery=${searchInput}`, {
        method: 'get'
      })
      const banana = await response.json();
      setResults(banana);
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  return (
    <Container>
      <Search setSearchInput={setSearchInput} handleSearchSubmit={handleSearchSubmit} />
      <Results results={results} setResults={setResults} isAuthenticated={isAuthenticated} user={user}/>
    </Container>
  )
}

export default Home