import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './layouts/global-styles'
import { blueTheme, mainTheme } from './layouts/theme'
import OctopusSchema from './octopus-format/OctopusSchema'

export function App() {
  return (
    <ThemeProvider theme={{ ...mainTheme, ...blueTheme }}>
      <BrowserRouter>
        <GlobalStyles />
        <OctopusSchema />
      </BrowserRouter>
    </ThemeProvider>
  )
}
