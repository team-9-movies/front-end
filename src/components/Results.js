import { useState } from "react";
import DetailsModal from "./DetailsModal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SaveButton from "./SaveButton";
import DetailsButton from "./DetailsButton";

const Results = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const modalOn = async (item) => {
    setSelectedItem(item)
    setShowModal(true)

    try{
      
      const response = await fetch(`${server}/movie?reviewQuery=${item.id}`, {
        method: 'get'
      })
  
      const reviews = await response.json();
      setResults(reviews);

    } catch (err) {

      console.log(`Error: ${err}`)

    }

  }
  const modalOff = () => setShowModal(false)

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

      <DetailsModal modalOff={modalOff} showModal={showModal} selectedItem={selectedItem} isAuth={props.isAuthenticated} />

      <Row xs={1} md={3} className="g-4">
        {props.results.map((item, idx) =>
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
                <p className="g-1" ><span className="fw-bold">Rating:</span> {item.vote_average}/10</p>
                <Card.Text>{item.overview}</Card.Text>
                
                <DetailsButton modalOn={modalOn} item={item} />
                {props.isAuthenticated
                  ?
                  <>
                    <SaveButton />
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
