import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";


const EditReviewButton = (props) => {

const [reviews, setReviews] = useState(props.review)

let reviewId = props.review._id
console.log(reviewId)
// add text below after setup the name 
let text = "this is testing for edit review";
let editedReview = {text, reviewId}

    return (
      <Button variant="primary" onClick={() => {   
              axios.put(`${process.env.REACT_APP_SERVER}/reviews/edit?apiid=${props.selectedItem.apiId}`, editedReview )
              .then((response) => {
              console.log("connected", response.data);

              })
          
      }}>Edit Review</Button>

    )
}



export default EditReviewButton