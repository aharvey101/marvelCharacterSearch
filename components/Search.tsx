import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

interface ISearch {
  handleSearch: (searchParam) => void
}

// TODO: fix up styling
export const Search: React.FC<ISearch> = ({ handleSearch }) => {
  const [character, setCharacter] = useState('')

  const handleUpdateState = (e): void => {
    setCharacter(e.target.value)
  }

  const handleSubmit = (event): void => {
    event.preventDefault()
    handleSearch(character)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={1} xs={1}></Col>
        <Col sm={8} xs={4}>
          <Form.Group>
            <Form.Control onChange={handleUpdateState} />
          </Form.Group>
        </Col>
        <Col sm={3} xs={4}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
