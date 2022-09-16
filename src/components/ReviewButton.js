import { Button } from "react-bootstrap";

import { useNavigate } from 'react-router-dom'
import axios from "axios";

const ReviewButton = (props) => {



  let navigate = useNavigate()
  let userEmail = props.user.email
  let nickName = props.nickName
  // add text below after setup the name 
  
  let text = props.text
  let newReview = { userEmail, nickName, text }

  return (
    <Button variant="primary" onClick={() => {
      axios.put(`${process.env.REACT_APP_SERVER}/reviews?apiid=${props.selectedItem.apiId}`, newReview)
        .then((response) => {
          console.log("connected", response.data);
          console.log(props.nickname)
          console.log(props.text)
        })

    }}>Add Review</Button>
  )
}



export default ReviewButton