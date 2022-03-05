import { Button, Card, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 18rem;
`

const CharacterCard: React.FC = () => {
  return (
    <Row>
      <Col>
        <StyledCard>
          <Card.Img variant="top" src="holder.js/100x180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </StyledCard>
      </Col>
    </Row>
  )
}

export const Results: React.FC = () => {
  return <CharacterCard />
}
