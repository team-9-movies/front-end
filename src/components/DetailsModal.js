import SaveButton from "./SaveButton"
import { Modal } from "react-bootstrap"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'

const DetailsModal = (props) => {

    

    return (
        <>
            {/* grab the information from the results.js for that particular movie and display the information */}

            <Modal show={props.showModal}>
                <Modal.Header>
                    <Modal.Title >{props.selectedItem.original_title}</Modal.Title>
                </Modal.Header>
                {props.selectedItem.backdrop_path != null
                    ?
                    <>
                        <Image variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${props.selectedItem.backdrop_path}`} />
                    </>
                    :
                    <Image variant="top" className="img-thumbnail" src="no-image.png" />
                }
                <Modal.Body>
                    <p className="g-1" ><span className="fw-bold">Release Date:</span> {props.selectedItem.release_date}</p>
                    <p className="g-1" ><span className="fw-bold">Rating:</span> {props.selectedItem.vote_average}/10</p>
                    {props.selectedItem.overview}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.modalOff}>
                        Return to Search Results
                    </Button>
                    {props.isAuth
                        ?
                        <>
                        <SaveButton />
                        </>
                        :
                        <Button variant="secondary">Login to Save</Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailsModal
