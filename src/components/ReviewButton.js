import { Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

const ReviewButton = (props) => {
let userEmail = props.user.email
let nickName = props.user.nickName
// add text below after setup the name 
let text;
let newReview = {userEmail, nickName, text}

  return (
    <Button variant="primary" onClick={() => {   
            axios.put(`${process.env.REACT_APP_SERVER}/reviews?apiid=${props.selectedItem.id}`, newReview )
            .then((response) => {
            console.log("connected", response.data);
            })
        
    }}>Add Review</Button>
  )
}



export default ReviewButton