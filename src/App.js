import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";


function App() {

  const server = process.env.REACT_APP_SERVER;

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: wrap fetch into a try/catch statement

    const response = await fetch(`${server}/movie?searchQuery=${searchInput}`, {
      method: 'get'
    })

    const banana = await response.json();
    setResults(banana);
  }

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
        user={user}
      />
      <Container>
        <Search setSearchInput={setSearchInput} handleSearchSubmit={handleSearchSubmit}/>
        <Results results={results}/>
      </Container>
    </>
  );
}

export default App;
