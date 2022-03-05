import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-basis: 50%;
`
// TODO: fix up styling
export const Search: React.FC = () => {
  return (
    <Form>
      <Row>
        <Col sm={1}></Col>
        <Col sm={8}>
          <Form.Group>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
