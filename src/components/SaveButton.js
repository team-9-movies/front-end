import { Button } from "react-bootstrap";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";

const SaveButton = (props) => {

  const { user } = useAuth0();
  const [match, setMatch] = useState(props.match);

  const saveMovie = async (movie) => {
    movie.email = user.email;
    try{
      await axios.post(`${process.env.REACT_APP_SERVER}/mylists`, movie);
      setMatch(true);
    } catch(err){
      console.log('Error saving!')
    }
  }

  return (
    <Button
      variant={match ? "secondary" : "primary"}
      disabled={match}
      onClick={() => { saveMovie(props.movie) }}
    >
      {match ? "Saved" : "Save"}
    </Button>
  )
}

export default SaveButton
