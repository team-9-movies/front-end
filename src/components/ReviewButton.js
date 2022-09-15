import { Button } from "react-bootstrap";

import axios from "axios";

const ReviewButton = (props) => {
let userEmail = props.user.email
let nickName = props.user.nickName
// add text below after setup the name 
let text = "this is testing";
let newReview = {userEmail, nickName, text}

  return (
    <Button variant="primary" onClick={() => {   
            axios.put(`${process.env.REACT_APP_SERVER}/reviews?apiid=${props.selectedItem.apiId}`, newReview )
            .then((response) => {
            console.log("connected", response.data);
            })
        
    }}>Add Review</Button>
  )
}



export default ReviewButton