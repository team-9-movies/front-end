import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";


const EditReviewButton = (props) => {
// console.log(`Edit Review button props:`, props)
// const [review, setReview] = useState(props.review)
// useEffect(() => {
//   setReview(props.review)
// }, [props.review])

let reviewId = props.review._id
console.log(reviewId)

    return (
      <Button variant="primary" className="me-1" onClick={ () => { 
              const text = window.prompt('What is your new review text?')
              console.log(text)  
              let editedReview = {text, reviewId}
              console.log(editedReview)

              axios.put(`${process.env.REACT_APP_SERVER}/reviews/edit?apiid=${props.selectedItem.apiId}`, editedReview)

              .then((response) => {
              console.log("connected", response.data);
                // where we will set our reviews
                const copyReviews = [...props.reviews]
                const updatedReviews = copyReviews.map((review) => {
                  if(review._id === reviewId) {
                    review.text = text
                    return review
                  } else {
                    return review
                  }
                })
                props.setReviews(updatedReviews)
              })
          
      }}>Edit Review</Button>

    )
}



export default EditReviewButton