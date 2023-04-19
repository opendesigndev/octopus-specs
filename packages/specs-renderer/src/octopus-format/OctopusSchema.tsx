import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import type OctopusComponent from '@opendesign/octopus-oas/dist/openapi.json'
import type OctopusManifest from '@opendesign/manifest-oas/dist/openapi.json'
import CopyButtonModule from 'src/pages/docs/layouts/components/CopyButton'
import Markdown from '../layouts/components/endpoints/Markdown/Markdown'
import { getIdFromRef } from './helpers/hooks'
import SchemaType from './components/SchemaType'
import { createAnchorLink } from './helpers/create-anchor-link'
// import SchemaHeader from './components/SchemaHeader'

const TypeSchema = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-column-gap: 2rem;
  margin: 0px 30px 30px 0;
  background-image: linear-gradient(rgba(232, 240, 255, 0.4) 0, rgba(255, 255, 255, 0.4) 100px);
  border-radius: 5px;
  padding: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 200px auto;
  }

  @media (max-width: 1000px) {
    background-image: none;
    display: block;
    padding: 0;
  }
`
const TypeWrapper = styled.div`
  @media (max-width: 1000px) {
    border-bottom: 2px solid rgba(232, 240, 255, 0.4);
    padding-top: 4rem;
    margin: -2rem 0 2rem;
  }
`
const TypeName = styled.h3`
  position: relative;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1.1;
  font-family: ${(props) => props.theme.fontFamilyMonospace};

  button {
    display: none;
    padding-right: 0.5rem;
  }

  &:hover {
    button {
      display: inline-block;
    }
  }

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`
const TypeDescription = styled(Markdown)`
  color: ${(props) => props.theme.inkTertiary};
`
const BaseType = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 0 0.75rem;
  order: -1;
  color: ${(props) => props.theme.inkTertiary};
  border-bottom: 1px solid ${(props) => props.theme.paintTertiary};

  a {
    font-weight: 600;
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: ${(props) => props.theme.primaryNormal};

    &:hover {
      color: ${(props) => props.theme.primaryNormalHover};
    }
  }
`
const CopyButton = styled(CopyButtonModule)`
  position: absolute;
  left: -32px;
  top: -4px;

  svg {
    fill: transparent;
  }

  &:hover svg {
    fill: ${(props) => props.theme.primaryLight};
  }
`

const OneOf = styled.div`
  color: ${(props) => props.theme.inkTertiary};
`

const SchemaLink = styled.div`
  margin-top: 0.75rem;

  &:before {
    content: '';
    border-left: 2px solid ${(props) => props.theme.paintTertiary};
    border-right: 2px solid ${(props) => props.theme.paintTertiary};
    border-radius: 4px;
    height: 100%;
    width: 1px;
    margin-right: 1rem;
  }

  a {
    font-weight: 600;
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: ${(props) => props.theme.primaryNormal};

    &:hover {
      color: ${(props) => props.theme.primaryNormalHover};
    }
  }
`

type OctopusSchemaProps = {
  schemaTypePrefix: string
  schemas: typeof OctopusComponent.components.schemas | typeof OctopusManifest.components.schemas
}

const Schema: React.FC<OctopusSchemaProps> = ({ schemaTypePrefix, schemas }) => {
  const { pathname } = useRouter()

  const getSchemaLink = useCallback(
    (id: string) => {
      if (typeof location === 'undefined') return ''
      return `${location.origin}${pathname}#${createAnchorLink(schemaTypePrefix, id)}`
    },
    [pathname]
  )

  return (
    <div>
      {Object.keys(schemas).map((schemaTypeName) => {
        if ('oneOf' in schemas[schemaTypeName]) {
          return (
            <div
              id={createAnchorLink(schemaTypePrefix, schemaTypeName)}
              key={createAnchorLink(schemaTypePrefix, schemaTypeName)}
            >
              <TypeSchema>
                <TypeWrapper>
                  <TypeName>
                    <CopyButton
                      position='left'
                      icon='anchor'
                      copyContent={getSchemaLink(schemaTypeName)}
                      trackingOptions={{
                        type: 'link',
                        source: 'octopus-format',
                        name: schemaTypeName,
                        link: getSchemaLink(schemaTypeName),
                      }}
                    />
                    {schemaTypeName}
                  </TypeName>
                  <TypeDescription source={schemas[schemaTypeName].description} />
                </TypeWrapper>

                <OneOf>
                  oneOf:
                  {(schemas[schemaTypeName]?.oneOf).map(({ $ref }) => {
                    const id = $ref ? getIdFromRef($ref) : ''
                    return (
                      <SchemaLink key={id}>
                        <a href={`#${createAnchorLink(schemaTypePrefix, id)}`}>{id}</a>
                      </SchemaLink>
                    )
                  })}
                </OneOf>
              </TypeSchema>
            </div>
          )
        }

        if ('allOf' in schemas[schemaTypeName]) {
          return (
            <div
              id={createAnchorLink(schemaTypePrefix, schemaTypeName)}
              key={createAnchorLink(schemaTypePrefix, schemaTypeName)}
            >
              <TypeSchema>
                <TypeWrapper>
                  <TypeName>
                    <CopyButton
                      position='left'
                      icon='anchor'
                      copyContent={getSchemaLink(schemaTypeName)}
                      trackingOptions={{
                        type: 'octopus-format',
                        name: schemaTypeName,
                        link: getSchemaLink(schemaTypeName),
                      }}
                    />
                    {schemaTypeName}
                  </TypeName>
                  <TypeDescription source={schemas[schemaTypeName].description} />
                </TypeWrapper>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {(schemas[schemaTypeName]?.allOf).map((schema) => {
                    if (schema.$ref) {
                      const id = schema.$ref ? getIdFromRef(schema.$ref) : ''

                      return (
                        <BaseType key={id}>
                          inherits from{' '}
                          <a href={`#${createAnchorLink(schemaTypePrefix, id)}`}>{id}</a>
                        </BaseType>
                      )
                    }

                    return Object.keys(schema?.properties).map((typeName) => {
                      const { properties, required } = schema

                      return (
                        <SchemaType
                          key={typeName}
                          schemas={schemas}
                          schema={properties[typeName]}
                          name={typeName}
                          requiredTypes={required}
                          schemaTypePrefix={schemaTypePrefix}
                        />
                      )
                    })
                  })}
                </div>
              </TypeSchema>
            </div>
          )
        }

        if ('properties' in schemas[schemaTypeName]) {
          return (
            <div
              id={createAnchorLink(schemaTypePrefix, schemaTypeName)}
              key={createAnchorLink(schemaTypePrefix, schemaTypeName)}
            >
              <TypeSchema>
                <TypeWrapper>
                  <TypeName>
                    <CopyButton
                      position='left'
                      icon='anchor'
                      copyContent={getSchemaLink(schemaTypeName)}
                      trackingOptions={{
                        type: 'link',
                        source: 'octopus-format',
                        name: schemaTypeName,
                        link: getSchemaLink(schemaTypeName),
                      }}
                    />
                    {schemaTypeName}
                  </TypeName>
                  <TypeDescription source={schemas[schemaTypeName].description} />
                </TypeWrapper>

                <div>
                  {Object.keys(schemas[schemaTypeName]?.properties).map((typeName) => {
                    const { properties, required } = schemas[schemaTypeName]

                    return (
                      <SchemaType
                        key={typeName}
                        schemas={schemas}
                        schema={properties[typeName]}
                        name={typeName}
                        requiredTypes={required}
                        schemaTypePrefix={schemaTypePrefix}
                      />
                    )
                  })}
                </div>
              </TypeSchema>
            </div>
          )
        }

        const { required } = schemas[schemaTypeName]

        return (
          <div
            id={createAnchorLink(schemaTypePrefix, schemaTypeName)}
            key={createAnchorLink(schemaTypePrefix, schemaTypeName)}
          >
            <TypeSchema>
              <TypeWrapper>
                <TypeName>
                  <CopyButton
                    position='left'
                    icon='anchor'
                    copyContent={getSchemaLink(schemaTypeName)}
                    trackingOptions={{
                      type: 'link',
                      source: 'octopus-format',
                      name: schemaTypeName,
                      link: getSchemaLink(schemaTypeName),
                    }}
                  />
                  {schemaTypeName}
                </TypeName>
                <TypeDescription source={schemas[schemaTypeName].description} />
              </TypeWrapper>
              <SchemaType
                key={schemaTypeName}
                schemas={schemas}
                schema={schemas[schemaTypeName]}
                name={schemaTypeName}
                requiredTypes={required}
                schemaTypePrefix={schemaTypePrefix}
              />
            </TypeSchema>
          </div>
        )

        return null
      })}
    </div>
  )
}

export default Schema
