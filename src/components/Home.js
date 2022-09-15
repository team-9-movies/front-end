import React from 'react'
import { Container } from "react-bootstrap";
import Search from "./Search";
import Results from "./Results";
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [faves, setFaves] = useState([]);

  const checkFaves = () => {
    console.log('Running checkFaves')
    if (isAuthenticated) {
      axios.get(`${process.env.REACT_APP_SERVER}/mylists/favorites?email=${user.email}`)
        .then((response) => {
          console.log("connected", response.data);
          setFaves(response.data);
        })
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    checkFaves();
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
      <Results results={results} setResults={setResults} isAuthenticated={isAuthenticated} user={user} faves={faves}/>
    </Container>
  )
}

export default Home