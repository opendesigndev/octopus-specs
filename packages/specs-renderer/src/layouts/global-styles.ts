// copied from https://gitlab.avcd.cz/backend/open-design-docs/-/blob/master/src/common/styles/global-styles.ts
// this is here so that octopus-format works without any patches
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* App global styles */

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;    
  }

  img[role=presentation] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  #__next {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body, button, input, h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: #115DF8;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  input:focus::-webkit-input-placeholder {
    transition: 0.15s ease-in !important;
    opacity: 0.8 !important;
  }

  input:focus:-moz-placeholder {
    transition: 0.15s ease-in !important;
    opacity: 0.8 !important;
  } /* FF 4-18 */

  input:focus::-moz-placeholder {
    transition: 0.15s ease-in !important;
    opacity: 0.8 !important;
  } /* FF 19+ */

  input:focus:-ms-input-placeholder {
    transition: 0.15s ease-in !important;
    opacity: 0.8 !important;
  } /* IE 10+ */

  ::-moz-selection {
    color: #fff;
    background: #115DF8;
    text-shadow: none;
  }

  ::selection {
    color: #fff;
    background: #115DF8;
    text-shadow: none;
  }

  figure {
    margin: 4rem 0;
    max-width: 40rem;
  }

  figure > * {
    display: block;
    width: 100%;
  }

  figure img,
  figure iframe {
    border-radius: 0.5rem;
  }

  figure figcaption {
    margin-top: 2rem;
    color: ${({ theme }) => theme.inkTertiary};
    font-size: 0.875rem;
  }

  kbd {
    font-family: inherit !important;
    padding: 0 8px;
    font-size: 11px !important;
    font-weight: 700;
    background-color:#7C7C7C;
    color:#fff;
    border-radius: 3px;
    display: inline-block;
    margin: 0 2px;
    line-height: 1.7;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .freeze, .freeze body {
    overflow: hidden;
  }
`

export default GlobalStyles
