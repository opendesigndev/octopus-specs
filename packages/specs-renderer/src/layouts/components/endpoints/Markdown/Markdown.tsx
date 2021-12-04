// simple markdown renderer replacement
// this is here so that octopus-format works without any patches
import ReactMarkdown from 'react-markdown'

export default function Markdown({ source }: { source: string }) {
  return <ReactMarkdown>{source}</ReactMarkdown>
}
