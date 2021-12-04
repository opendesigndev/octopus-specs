import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-column-gap: 2rem;
  padding: 3.5rem 3rem 0.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 200px auto;
  }

  @media (max-width: 1000px) {
    display: none;
  }

  :not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.paintTertiary};
  }
`

const Text = styled.p`
  font-weight: 700;
  font-size: 0.75rem;
  color: ${(props) => props.theme.inkTertiary};
`

const SchemaHeader: React.FC = () => {
  return (
    <Wrapper>
      <Text>Type</Text>
      <Text>Properties</Text>
    </Wrapper>
  )
}

export default SchemaHeader
