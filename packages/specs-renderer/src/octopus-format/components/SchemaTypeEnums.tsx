import React from 'react'
import styled from 'styled-components'

const Enums = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
`
const Enum = styled.span`
  display: inline-block;
  padding: 0.2rem 0.3rem;
  font-family: 'Fira Code', Courier, monospace;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${(props) => props.theme.inkSecondary};
  border: 1px solid ${(props) => props.theme.inkTertiary};
  margin: 0 0 0.5rem;
  border-radius: 0.125rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`

type Props = {
  enums?: Array<string>
}

const SchemaTypeEnums: React.FC<Props> = ({ enums }) => {
  if (!enums?.length) {
    return null
  }

  return (
    <Enums>
      enums:{' '}
      {enums.map((enumVal: string) => (
        <Enum key={enumVal}>{enumVal}</Enum>
      ))}
    </Enums>
  )
}

export default SchemaTypeEnums
