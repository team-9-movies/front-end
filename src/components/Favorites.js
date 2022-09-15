import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';


const Movies = (props) => {

  const {
    // isLoading,
    isAuthenticated,
    // error,
    user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      axios.get(`${process.env.REACT_APP_SERVER}/mylists/favorites?email=${user.email}`)
        .then((response) => {
          console.log("connected", response.data);
          setMovies(response.data);
        })
    }
  }, [isAuthenticated, setMovies, user.email]);


  // const newReview =
  //   (
  //     <div>
  //         <Link to="/review/new">
  //             <Button variant="primary" size="sm">
  //             Add Review
  //             </Button>
  //         </Link>
  //     </div>
  //   )

  return (
    <Container>
      {movies.length === 0 ?
        <>
          <h3 className="mt-4"> You don't have favorites yet! </h3>
        </>
        : <>
          <h3 className="mt-4"> My Favorite movies </h3>
        </>
      }


      <Row xs={1} md={3} className="g-4">

        {movies.map((movie, idx) => (
          <Col key={idx}>
            <Card className="mt-3 mb-3">
              {movie.imgSrc ?
                <>
                  <Card.Img
                    as="img"
                    variant="top"
                    className="img-thumbnail"
                    src={movie.imgSrc}
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
                <Card.Title>{movie.title} </Card.Title>
                {/* <Card.Text>{movie.overview}</Card.Text>*/}

                {props.isReviewed ?
                  <>
                    <Button variant="primary" size="sm" className="me-1">
                      Details
                    </Button>
                  </>
                  :
                  <>
                    <Button variant="primary" size="sm" className="me-1">
                      Details
                    </Button>
                    <Button variant="primary" size="sm">
                      Add Review
                    </Button>

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
