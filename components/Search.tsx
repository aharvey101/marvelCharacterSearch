import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

interface ISearch {
  handleSearch: (searchParam: string) => void
}

// TODO: fix up styling
export const Search: React.FC<ISearch> = ({ handleSearch }) => {
  const [character, setCharacter] = useState('')

  const handleUpdateState = (e): void => {
    setCharacter(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(character)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Col xs lg={2} />
        <Col xs={6} lg={8} md="auto">
          <Form.Group>
            <Form.Control onChange={handleUpdateState} />
          </Form.Group>
        </Col>
        <Col xs lg={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
