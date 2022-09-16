import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteReviewButton = (props) => {
    let reviewId = props.review._id
    let deletedReview = {reviewId}
    console.log(reviewId)
    return (
        <Button variant="primary" onClick={() => {   
            axios.put(`${process.env.REACT_APP_SERVER}/reviews/delete?apiid=${props.selectedItem.apiId}`, deletedReview )
            .then((response) => {
            console.log("connected", response.data);
            })
        
    }}>Delete Review</Button>

    )

}

export default DeleteReviewButton