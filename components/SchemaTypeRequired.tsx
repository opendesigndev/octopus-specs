import React, { useMemo } from 'react'
import styled from 'styled-components'

const Required = styled.span`
  display: inline-block;
  padding: 0.2rem 0.3rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #ffd9da;
  text-transform: uppercase;
  color: #c44133;
  border-radius: 0.125rem;
  margin-bottom: 0.5rem;
`

type Props = {
  name: string
  requiredTypes?: Array<string>
}

const SchemaTypeRequired: React.FC<Props> = ({ name, requiredTypes }) => {
  const isRequred = useMemo(() => {
    return requiredTypes ? requiredTypes.includes(name) : false
  }, [name, requiredTypes])

  if (!isRequred) {
    return null
  }

  return <Required>required</Required>
}

export default SchemaTypeRequired
