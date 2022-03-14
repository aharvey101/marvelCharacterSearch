import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledSuggestions = styled.ul`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  li {
    padding: 0.5rem;
  }
  li:hover {
    background-color: #0d00ff;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    li:not(:last-of-type) {
      border-bottom: 1px solid #ced4da;
    }
  }
`

export interface ISearch {
  handleSearch: (searchParam: string) => void
  suggestions: any
}

export const Search: React.FC<ISearch> = ({ handleSearch, suggestions }) => {
  const [character, setCharacter] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    handleSearch(character)
  }, [character])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handleSearch(character)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value)
    setShowSuggestions(true)
  }

  const onClickSuggestion = (event) => {
    setCharacter(event.target.textContent)
    setShowSuggestions(false)
  }

  const SuggestionsListComponent = () => {
    return character.length > 0 ? (
      <StyledSuggestions>
        {suggestions &&
          suggestions.map((suggestion, index) => {
            return (
              <li key={index} value={suggestion} onClick={onClickSuggestion}>
                {suggestion}
              </li>
            )
          })}
      </StyledSuggestions>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you&apos;re on your own!</em>
      </div>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Col xs={2} lg={2} />
        <Col xs={6} lg={8} md="auto">
          <Form.Group>
            <Form.Control
              placeholder={'Starts with...'}
              onChange={onInputChange}
              value={character}
            />
            {showSuggestions && character && <SuggestionsListComponent />}
          </Form.Group>
        </Col>
        <Col xs={3} lg={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
