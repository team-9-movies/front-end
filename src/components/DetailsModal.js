import SaveButton from "./SaveButton"
import ReviewButton from "./ReviewButton"
import { Modal } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';

const DetailsModal = (props) => {
    
    
    return (
        <>
            {/* grab the information from the results.js for that particular movie and display the information */}

            <Modal show={props.showModal}>
                <Modal.Header>
                    <Modal.Title >{props.selectedItem.original_title}</Modal.Title>
                </Modal.Header>
                {props.selectedItem.backdrop_path != null
                    ?
                    <>
                        <Image variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${props.selectedItem.backdrop_path}`} />
                    </>
                    :
                    <Image variant="top" className="img-thumbnail" src="no-image.png" />
                }
                <Modal.Body>
                    <p className="g-1" ><span className="fw-bold">Release Date:</span> {props.selectedItem.release_date}</p>
                    <p className="g-1" ><span className="fw-bold">Rating:</span> {props.selectedItem.vote_average}/10</p>
                    <p className="g-1"><span className="fw-bold">Overview: </span><span>{props.selectedItem.overview}</span></p>
                    
                    <h4 className="m">Reviews:</h4>
                    {props.reviews && props.reviews.length == 0 ?
                        <>
                            <p style={{ color: 'blue' }}>No reviews available for this title. Save the movie to be the first!</p>
                        </>
                        :
                        props.reviews && props.reviews.map((review, idx) =>
                                <Accordion defaultActiveKey="0" key={idx}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>User Review</Accordion.Header>
                                        <Accordion.Body>
                                            <p>{review.text}</p>
                                            <span>Posted by: </span>
                                            <span>{review.email}</span>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )
                    }
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.modalOff}>
                        Return to Search Results
                    </Button>
                    {props.isAuth
                        ?
                        <>
                        <SaveButton movie={props.selectedItem} match={props.selectedItem.isMatching}/>
                        
                        </>
                        :
                        <Button variant="secondary">Login to Save</Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailsModal
