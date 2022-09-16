import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAuth0 } from '@auth0/auth0-react';
import FavoritesDetailsModal from "./FavoritesDetailsModal";
import DetailsButton from "./DetailsButton";
import { Container } from "react-bootstrap";

const Movies = (props) => {

  const {
    // isLoading,
    isAuthenticated,
    // error,
    user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  const server = process.env.REACT_APP_SERVER;
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    console.log(user)
    if (isAuthenticated) {
      axios.get(`${process.env.REACT_APP_SERVER}/mylists/favorites?email=${user.email}`)
        .then((response) => {
          console.log("connected", response.data);
          setMovies(response.data);
        })
    }
  }, [isAuthenticated, user]);

  const modalOn = async (item) => {
    setSelectedItem(item)
    console.log(item)
    setShowModal(true)
  }

  const modalOff = () => setShowModal(false)

  const handleDeleteFavorite = async (movie) => {
    
    try {
      const response = await axios.put(`${process.env.REACT_APP_SERVER}/mylists/delete?email=${user.email}`, {id : movie._id})
      console.log('successfully deleted movie:', response.data)
      const newMovies = movies.filter(myMovie => myMovie._id !== movie._id);
      console.log('new movies', newMovies);
      setMovies(newMovies);
    } catch (err){
      console.log('Error deleting favorite movie')
    }

  }

  return (
    <Container>
      {movies.length === 0 ?
        <>
          <h3 className="mt-4"> You don't have favorites yet! </h3>
        </>
        :
        <h3 className="mt-4"> My Favorite movies </h3>
      }

      {/* modal */}
      <FavoritesDetailsModal modalOff={modalOff} showModal={showModal} selectedItem={selectedItem} isAuth={isAuthenticated} user={user} movies={movies}/>

      <Row xs={1} md={3} className="g-4">

        {movies.map((movie, idx) => (
          <Col key={idx}>
            <Card className="mt-3 mb-3">
              {movie.backdrop_path
                ?
                <>
                  <Card.Img
                    as="img"
                    variant="top"
                    className="img-thumbnail"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                </>
                :
                <Card.Img
                  as="img"
                  variant="top"
                  className="img-thumbnail"
                  src="no-image.png"
                />
              }
              <Card.Body>
                <Card.Title>{movie.original_title} </Card.Title>
                <Card.Text style={{ maxHeight: '100px', overflow: 'hidden' }}>{movie.overview}</Card.Text>
                {props.isReviewed ?
                  <>
                    <DetailsButton />
                  </>
                  :
                  <>
                    <DetailsButton modalOn={modalOn} item={movie} />
                    <Button variant="danger" className="ms-1" onClick={()=>{handleDeleteFavorite(movie)}}>Delete</Button>
                  </>
                }
              </Card.Body>
            </Card>
          </Col>
        )
        )}
      </Row>
    </Container>
  );
};

export default Movies;
