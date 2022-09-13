import { Button, Form, InputGroup } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Form className="mt-3" onSubmit={props.handleSearchSubmit}>
      <InputGroup >
        <Form.Control
          type='search'
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => { props.setSearchInput(e.target.value) }}
        />
        <Button variant="outline-secondary" id="button-addon2" type='submit'>
          Button
        </Button>
      </InputGroup>
    </Form>
  )
}

export default Search
