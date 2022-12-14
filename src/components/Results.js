import { useState } from "react";
import DetailsModal from "./DetailsModal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SaveButton from "./SaveButton";
import DetailsButton from "./DetailsButton";

const Results = (props) => {

  const server = process.env.REACT_APP_SERVER;
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [reviews, setReviews] = useState({})

  const modalOn = async (item, match) => {
    item["isMatching"] = match; 
    setSelectedItem(item)
    console.log(selectedItem)
    setShowModal(true)
    try {
      const response = await fetch(`${server}/reviews?apiid=${item.id}`, {
        method: 'get'
      })
      const res = await response.json();
      console.log(res);
      setReviews(res);
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

      <DetailsModal modalOff={modalOff} showModal={showModal} selectedItem={selectedItem} isAuth={props.isAuthenticated} user={props.user} reviews={reviews}/>

      <Row xs={1} md={3} className="g-4">
        {props.results.map((item, idx) => {
          let match = props.faves.filter(favorite => item.id === favorite.apiId)
          console.log("match", match)
          return (
            <Col key={idx}>
              <Card  className="mt-3 mb-3">
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
                  <Card.Text style={{ maxHeight: '100px', overflow: 'hidden' }}>{item.overview}</Card.Text>

                  <DetailsButton modalOn={modalOn} item={item} match={match.length > 0 ? true : false}/>
                  {props.isAuthenticated
                    ?
                    <>
                      <SaveButton match={match.length > 0 ? true : false} movie={item} />
                    </>
                    :
                    <Button variant="secondary">Login to Save</Button>
                  }
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Results
