import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Icon from 'modules/Icon'
import Markdown from '../../layouts/components/endpoints/Markdown/Markdown'
import { useSchema } from '../helpers/hooks'
import TypeFormat from './SchemaTypeFormat'
import TypeRequired from './SchemaTypeRequired'
import TypeEnums from './SchemaTypeEnums'

const TypeWrapper = styled.div<{ isIndented: boolean }>`
  margin-bottom: ${(props) => !props.isIndented && '2rem'};
  padding: ${(props) => props.isIndented && '0.5rem 0 0.5rem 1.5rem'};
  margin-left: ${(props) => props.isIndented && '1rem'};
  border-left: ${(props) => props.isIndented && `2px solid ${props.theme.paintTertiary}`};

  &:nth-last-child(1) {
    margin-bottom: 2.5rem;
    padding-bottom: 0;
  }
`
const TypeHeader = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`
const TypeName = styled.span`
  font-weight: 700;
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  word-break: break-word;
  margin-right: 0.75rem;
`
const TypeDescription = styled(Markdown)`
  color: ${(props) => props.theme.inkTertiary};
`
const ToggleSchema = styled.button<{ isOpen?: boolean }>`
  position: absolute;
  top: -1px;
  left: -2.2rem;
  background: ${(props) => (props.isOpen ? props.theme.primaryLight : props.theme.paintSecondary)};
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;
  padding: 0;
  cursor: pointer;

  svg {
    position: relative;
    top: -1px;
    transform: ${(props) => (props.isOpen ? 'none' : 'rotate(-90deg)')};
    fill: ${(props) => (props.isOpen ? props.theme.primaryNormal : props.theme.inkTertiary)};
  }

  :hover {
    background: ${(props) => props.theme.primaryLight};

    svg {
      fill: ${(props) => props.theme.primaryNormal};
    }
  }

  :focus {
    outline: none;
  }
`
const DefaultValue = styled.span`
  display: inline-block;
  padding: 0.2rem 0.3rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.125rem;
  margin-bottom: 0.5rem;
  background: ${(props) => props.theme.paintTertiary};
  border: 1px solid ${(props) => props.theme.paintTertiary};
  color: ${(props) => props.theme.inkSecondary};
`

type Props = {
  name
  requiredTypes
  schemas
  schema
  isIndented?: boolean
  isNested?: boolean
  isOpen?: boolean
  toggleOpen?: () => void
}

const SchemaType: React.FC<Props> = ({
  name,
  isNested,
  requiredTypes,
  schemas,
  schema,
  isIndented = false,
  isOpen,
  toggleOpen,
}) => {
  const {
    id,
    type,
    format,
    enums,
    defaultValue,
    description,
    hasNestedSchema,
    isArray,
    properties,
  } = useSchema(schemas, schema)

  if (type === 'object' && !isNested) {
    const [open, setOpen] = useState(false)

    const toggleOpen = useCallback(() => {
      setOpen((state) => !state)
    }, [])

    return (
      <>
        <SchemaType
          isNested
          name={name}
          requiredTypes={requiredTypes}
          schemas={schemas}
          schema={schema}
          isOpen={open}
          toggleOpen={toggleOpen}
        />

        {properties && open && (
          <div>
            {Object.keys(properties).map((property) => {
              return (
                <SchemaType
                  isIndented
                  key={property}
                  name={property}
                  requiredTypes={schema?.required}
                  schemas={schemas}
                  schema={properties[property]}
                />
              )
            })}
          </div>
        )}
      </>
    )
  }

  return (
    <TypeWrapper isIndented={isIndented}>
      <TypeHeader>
        {type === 'object' && properties && (
          <ToggleSchema isOpen={isOpen} onClick={toggleOpen}>
            <Icon name='arrow' width='10px' height='6px' />
          </ToggleSchema>
        )}

        <TypeName>{name}</TypeName>
        <TypeFormat
          id={id}
          type={type}
          format={format}
          isArray={isArray}
          hasNestedSchema={hasNestedSchema}
        />
      </TypeHeader>

      <TypeRequired name={name} requiredTypes={requiredTypes} />

      {defaultValue && (
        <DefaultValue>default: {JSON.stringify(defaultValue, undefined, 4)}</DefaultValue>
      )}

      <TypeEnums enums={enums} />

      <TypeDescription source={description} />
    </TypeWrapper>
  )
}

export default SchemaType
