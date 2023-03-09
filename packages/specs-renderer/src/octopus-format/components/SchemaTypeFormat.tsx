import React from 'react'
import { createAnchorLink } from '../../utils/create-anchor-link'
import styled from 'styled-components'

const TypeFormat = styled.span`
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${(props) => props.theme.primaryNormal};
  letter-spacing: -0.2px;

  a {
    color: ${(props) => props.theme.primaryNormal};
  }

  a:hover {
    color: ${(props) => props.theme.primaryNormalHover};
    text-decoration: underline;
  }
`

type Props = {
  id?: string
  type: string
  format: string
  isArray: boolean
  hasNestedSchema: boolean
  schemaTypePrefix: string
}

const SchemaTypeFormat: React.FC<Props> = ({
  id,
  type,
  format,
  isArray,
  hasNestedSchema,
  schemaTypePrefix,
}) => {
  let typeFormat = hasNestedSchema ? id : type
  typeFormat += isArray ? '[]' : ''

  const detailedTypeFormat = format ? ` <${format}>` : ''

  if (hasNestedSchema) {
    return (
      <TypeFormat>
        <a href={`#${createAnchorLink(schemaTypePrefix, id as string)}`}>{typeFormat}</a>
      </TypeFormat>
    )
  }

  return <TypeFormat>{typeFormat + detailedTypeFormat}</TypeFormat>
}

export default SchemaTypeFormat
