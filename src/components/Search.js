import { Button, Form, InputGroup } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Form className="mt-4" onSubmit={props.handleSearchSubmit}>
      <InputGroup >
        <Form.Control
          type='search'
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => { props.setSearchInput(e.target.value) }}
        />
        <Button variant="primary" id="button-addon2" type='submit'>
          Search Movie Database
        </Button>
      </InputGroup>
    </Form>
  )
}

export default Search
