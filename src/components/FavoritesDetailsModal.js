
import ReviewButton from "./ReviewButton"
import { Modal } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';

const FavoritesDetailsModal = (props) => {


    return (
        <>
            {/* grab the information from the results.js for that particular movie and display the information */}

            <Modal show={props.showModal}>
                <Modal.Header>
                    <Modal.Title >{props.selectedItem.title}</Modal.Title>
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
                    { }
                    <p className="g-1" ><span className="fw-bold">Release Date:</span> {props.selectedItem.release_date}</p>
                    <p className="g-1" ><span className="fw-bold">Rating:</span> {props.selectedItem.vote_average}/10</p>
                    {props.selectedItem.overview}

                    {props.selectedItem.reviews && props.selectedItem.reviews.length == 0 ?
                        <>
                            <h3>No reviews available for this title.</h3>
                            <p>Be the first!</p>
                        </>
                        :
                        props.selectedItem.reviews && props.selectedItem.reviews.map((review, idx) =>
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
                        Close Details
                    </Button>
                    {props.isAuth
                        ?
                        <>
                            <ReviewButton selectedItem={props.selectedItem} user={props.user} />
                        </>
                        :
                        <Button variant="secondary">Login to Save</Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FavoritesDetailsModal
