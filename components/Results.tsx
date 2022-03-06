import {
  Button,
  Alert,
  Card,
  Col,
  Row,
  Spinner,
  Container,
  Modal,
} from 'react-bootstrap'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ResultsEntity } from '../types'

const StyledCard = styled(Card)`
  margin-top: 2rem;
  width: 18rem;
  height: 90%;
`

const StyledSpacer = styled.div`
  margin: 2rem;
`

interface ICards {
  characters: ResultsEntity[]
  isLoading: boolean
}

interface ICharacterCard {
  image: string
  name: string
  setShowModal: (id: number) => void
  showMore: boolean
  id: number
}

interface ICustomModal {
  image: string
  name: string
  description: string
  modalState: boolean
  id: number
  handleModal: (id: number) => void
}

interface IModalState {
  id: number
  modalState: boolean
}

const CharacterCard: React.FC<ICharacterCard> = ({
  name,
  image,
  setShowModal,
  showMore,
  id,
}) => {
  return (
    <Row>
      <Col>
        <StyledCard>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {showMore ? (
              <Button onClick={() => setShowModal(id)} variant="primary">
                Show More
              </Button>
            ) : null}
          </Card.Body>
        </StyledCard>
      </Col>
    </Row>
  )
}

export const Cards: React.FC<ICards> = ({ characters, isLoading }): any => {
  const [modalStateArray, setModalStateArray] = useState<IModalState[]>([])

  const MyModal: React.FC<ICustomModal> = ({
    image,
    name,
    description,
    modalState,
    id,
    handleModal,
  }) => {
    return (
      <Modal show={modalState} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Image height={270} width={200} src={image} alt={name}></Image>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal(id)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  useEffect(() => {
    if (characters) {
      const modalStates = characters.map((character) => {
        return {
          id: character.id,
          modalState: false,
        }
      })
      setModalStateArray(modalStates)
    }
  }, [characters])

  const handleModal = (id: number) => {
    const updatedEntry: IModalState | undefined = modalStateArray.find(
      (modalState) => modalState.id === id
    )
    if (updatedEntry) {
      updatedEntry.modalState = !updatedEntry.modalState
      setModalStateArray((ps) => [...ps, updatedEntry])
    }
  }

  const getModalState = (id: number) => {
    const state = modalStateArray.find((modal) => modal.id === id)
    if (state) {
      return state.modalState
    }
    return false
  }

  if (isLoading)
    return (
      <StyledSpacer>
        <Row className="justify-content-center">
          <Col />
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" variant="warning"></Spinner>
          </Col>
          <Col />
        </Row>
      </StyledSpacer>
    )

  if (characters && characters.length <= 0) {
    return (
      <StyledSpacer>
        <Row>
          <Col />
          <Col sm={12} md={8} className=" d-flex justify-content-center">
            <Alert variant="danger">
              <Alert.Heading>No character with that name</Alert.Heading>
            </Alert>
          </Col>
          <Col />
        </Row>
      </StyledSpacer>
    )
  }

  if (characters) {
    const CharacterCards = characters.map((character) => (
      <Col key={character.id} className=" d-flex justify-content-center">
        <MyModal
          modalState={getModalState(character.id)}
          name={character.name}
          description={character.description}
          image={`${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`}
          id={character.id}
          handleModal={handleModal}
        />
        <CharacterCard
          setShowModal={handleModal}
          name={character.name}
          image={`${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`}
          showMore={character.description === '' ? false : true}
          id={character.id}
        ></CharacterCard>
      </Col>
    ))
    return <Row>{CharacterCards}</Row>
  }
  return null
}
