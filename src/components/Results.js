
const Results = (props) => {
  return (
    <>
      <h3>Here will be my search results</h3>
      {props.results.map(item => <p>
        {item}
      </p>)}
    </>
  )
}

export default Results
