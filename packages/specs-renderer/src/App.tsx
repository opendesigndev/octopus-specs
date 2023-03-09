import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './layouts/global-styles'
import { blueTheme, mainTheme } from './layouts/theme'
import Schema from './octopus-format/OctopusSchema'
import styled from 'styled-components'
import OctopusComponent from '@opendesign/octopus-oas/dist/openapi.json'
import OctopusManifest from '@opendesign/manifest-oas/dist/openapi.json'
import { version as octopusVersion } from '@opendesign/octopus-oas/package.json'
import { version as manifestVersion } from '@opendesign/manifest-oas/package.json'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-column-gap: 2rem;
`

const Menu = styled.div`
  position: fixed;
  margin-top: 100px;
`

const SchemaNav = styled.a`
  display: block;
  padding: 10px 0 10px 30px;
  font-size: 20px;
  font-family: 'Fira Code', courier, monospace;
`

const SchemaDesc = styled.div`
  padding: 0 0 8px 30px;
  width: 280px;
  color: rgb(96, 105, 119);
  font-size: 14px;
`

const SchemaVersion = styled.div`
  padding: 0 0 30px 30px;
  color: rgb(80, 200, 120);
  font-size: 14px;
`

export function App() {
  const schemas = [
    {
      prefix: 'OctopusComponent',
      name: 'Component',
      schemas: OctopusComponent.components.schemas,
      description:
        'Octopus Component specification. Describes artboards, components and pasteboard.',
      version: octopusVersion,
    },
    {
      prefix: 'OctopusManifest',
      name: 'Manifest',
      schemas: OctopusManifest.components.schemas,
      description:
        'Octopus Manifest specification. Describes the root meta-file which contains information about whole Octopus design file.',
      version: manifestVersion,
    },
  ]

  const schemaNavigation = schemas.map((schema, index) => {
    return {
      button: (
        <>
          <SchemaNav href={`#schema-${schema.prefix}`}>{schema.name}</SchemaNav>
          <SchemaDesc>{schema.description}</SchemaDesc>
          <SchemaVersion>v{schema.version}</SchemaVersion>
        </>
      ),
      schema: (
        <>
          <div id={`schema-${schema.prefix}`}></div>
          <Schema schemaTypePrefix={schema.prefix} schemas={schema.schemas} />
        </>
      ),
    }
  })

  const buttons = schemaNavigation.map((entry) => entry.button)
  const schemasContent = schemaNavigation.map((entry) => entry.schema)

  return (
    <ThemeProvider theme={{ ...mainTheme, ...blueTheme }}>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <div>
            <Menu>{buttons}</Menu>
          </div>
          <div>{schemasContent}</div>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}
