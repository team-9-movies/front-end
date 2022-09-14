import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Results = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {props.results.length === 0
      ?
      <>
        <h3 className="mt-4">Search for a Movie!</h3>
      </>
      :
      <h3 className="mt-4"> Search Results</h3>
      }
      
      {/* modal will go here */}
      <Row xs={1} md={3} className="g-4">
      {props.results.map((item, idx) =>
        // Map out Card here
        <Col>
        <Card key={idx} className="mt-3 mb-3">
          {item.backdrop_path != null 
          ?
          <>
          <Card.Img as="img" variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
          </>
          :
          <Card.Img as="img" variant="top" className="img-thumbnail" src="no-image.png" />
        }
          <Card.Body>
            <Card.Title>{item.original_title}</Card.Title>
            <Card.Text>{item.overview}</Card.Text>
            <Button variant="primary" size="sm" className="me-1">Details</Button>
            {props.isAuthenticated
              ?
              <>
                <Button variant="primary" size="sm">Save</Button>
              </>
              :
              <Button variant="secondary" size="sm">Login to Save</Button>
              
            }
          </Card.Body>
        </Card>
        </Col>
      )}
      </Row>
    </>
  )
}

export default Results
