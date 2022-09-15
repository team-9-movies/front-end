import { Button } from "react-bootstrap";

const DetailsButton = (props) => {
    // create function to open modal here, onclick. Pass into button

    return (
        <Button
            variant="primary" className="me-1"
            onClick={() => {
                props.modalOn(props.item, props.match)
            }}>
            Details
        </Button>
    )
}

export default DetailsButton
