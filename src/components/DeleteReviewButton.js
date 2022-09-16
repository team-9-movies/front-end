import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteReviewButton = (props) => {

    const handleDeleteReview = (id) => {
        const updatedReviews = props.reviews.filter(review => review._id !== id) 
        
        axios.put(`${process.env.REACT_APP_SERVER}/reviews/delete?apiid=${props.selectedItem.apiId}`, {reviewId: id} )
        .then((response) => {
            props.setReviews(updatedReviews)
        })
        .catch(err => console.log('OOOPS in deletion of review'))
    }

    return (
        <Button variant="danger" onClick={() => {
            handleDeleteReview(props.review._id)
        }}>Delete Review</Button>

    )

}

export default DeleteReviewButton