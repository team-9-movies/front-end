import { useState } from "react";
import ReviewButton from "./ReviewButton"
import EditReviewButton from "./EditReviewButton"
import DeleteReviewButton from "./DeleteReviewButton"
import { Modal } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import { Form } from "react-bootstrap";



const FavoritesDetailsModal = (props) => {
    // const [review, setReview] = useState(props.selectedItem.reviews);
    const [nickname, setNickname] = useState("")
    const [text, setText] = useState("")


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
                    <p className="g-1"><span className="fw-bold">Overview: </span><span>{props.selectedItem.overview}</span></p>

                    {props.reviews && props.reviews.length === 0 ?
                        <>
                            <p style={{ color: 'blue' }}>No reviews available for this title. Save the movie to be the first!</p>
                        </>
                        :
                        props.selectedItem.reviews && props.selectedItem.reviews.map((review, idx) =>
                            <Accordion defaultActiveKey="0" key={idx}>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>User Review</Accordion.Header>
                                    <Accordion.Body>
                                        <p>{review.text}</p>
                                        <span>Posted by: </span>
                                        <span>{review.email}</span>
                                        <br></br>

                                        <EditReviewButton selectedItem={props.selectedItem} user={props.user} review={review} />
                                        <DeleteReviewButton selectedItem={props.selectedItem} user={props.user} review={review} reviews={props.reviews} setReviews={props.setReviews} />

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    }

                    <Form className="mt-5">
                        <Form.Group className="mb-3" controlId="formNickname">
                            <Form.Label>Enter nickname:</Form.Label>
                            <Form.Control type="nickname" placeholder="Enter nickname" onChange={(e) => setNickname(e.target.value)} />
                            <Form.Text className="text-muted">
                                Please provide your nickname for other users to see.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formReviewText">
                            <Form.Label>Review body:</Form.Label>
                            <Form.Control type="text" placeholder="Type your review here" as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
                        </Form.Group>
                        <ReviewButton selectedItem={props.selectedItem} user={props.user} nickname={nickname} text={text}/>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.modalOff}>
                        Close Details
                    </Button>
                    {/* {props.isAuth
                        ?
                        <>
                            <ReviewButton selectedItem={props.selectedItem} user={props.user} />

                        </>
                        :
                        <Button variant="secondary">Login to Save</Button>
                    } */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FavoritesDetailsModal
