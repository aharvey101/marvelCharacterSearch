import styled from 'styled-components'

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`

export const StyledTitle = styled.h1`
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`
