import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Movies = (props) => {

    
    useEffect(() => {
        if(props.isAuthenticated){     
        axios.get(`${process.env.REACT_APP_SERVER}/mylists/favorites?email=${props.user.email}`)
        .then((response) => {
        console.log("connected", response.data);
        props.setMovies(response.data);
        })
    }
    }, [props.isAuthenticated]);





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
    <>
      {props.movies.length === 0 ? 
        <>
          <h3 className="mt-4"> You don't have favorites yet! </h3>
        </>
       : 
        <h3 className="mt-4"> My Favorite movies </h3>
      }
      
      {/* modal */}
      <Row xs={1} md={3} className="g-4">
    
        {props.movies.map((movie, idx) => (
          <Col>
            <Card key={idx} className="mt-3 mb-3">
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
    </>
  );
};

export default Movies;
