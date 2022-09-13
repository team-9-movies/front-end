
const Results = (props) => {
  return (
    <>
      <h3>Here will be my search results</h3>
      {props.results.map((item, idx) => <li key={idx}>
        {item.original_title}
      </li>)}
    </>
  )
}

export default Results
