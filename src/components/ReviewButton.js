import { Button } from "react-bootstrap";
import axios from "axios";

const ReviewButton = (props) => {

  let userEmail = props.user.email
  let nickName = props.nickname
  let text = props.text
  let newReview = { userEmail, nickName, text }

  return (
    <Button variant="primary" onClick={() => {
      axios.put(`${process.env.REACT_APP_SERVER}/reviews?apiid=${props.selectedItem.apiId}`, newReview)
        .then((response) => {
          console.log("added review", response.data.reviews);
          props.setReviews(response.data.reviews);
          props.setNickname('')
          props.setText('')
        })
    }}>Add Review</Button>
  )
}



export default ReviewButton