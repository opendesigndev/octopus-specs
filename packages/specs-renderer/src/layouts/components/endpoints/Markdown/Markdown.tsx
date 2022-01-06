// simple markdown renderer replacement
// this is here so that octopus-format works without any patches
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Md = styled.div`
  color: rgb(96, 105, 119);
`

export default function Markdown({ source }: { source: string }) {
  return (
    <Md>
      <ReactMarkdown>{source}</ReactMarkdown>
    </Md>
  )
}
