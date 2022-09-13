import { useState } from "react"


const Results = (props) => {

const [showModal, setShowModal] = useState(false)

  return (
    <>
      <h3>Here will be my search results</h3>
      {/* modal will go here */}
      {props.results.map((item, idx) => <li key={idx}>
        {item.original_title}
      </li>)}
    </>
  )
}

export default Results
