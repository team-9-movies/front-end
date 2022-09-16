import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteReviewButton = (props) => {

    
    let reviewId = props.review._id
    let deletedReview = {reviewId}
    console.log(reviewId)
    return (
        <Button variant="primary" onClick={() => {   
            console.log("1111", props.reviews)
            const updatedReviews = props.reviews.filter(review => review._id === reviewId) 
            console.log("updated reviews", updatedReviews)
            props.setReviews(updatedReviews)
            axios.put(`${process.env.REACT_APP_SERVER}/reviews/delete?apiid=${props.selectedItem.apiId}`, deletedReview )
            .then((response) => {
                                
                console.log("connected", response.data);
            
            })
        
    }}>Delete Review</Button>

    )

}

export default DeleteReviewButton