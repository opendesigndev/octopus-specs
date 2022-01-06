// copied from https://gitlab.avcd.cz/backend/open-design-docs/-/blob/master/src/pages/docs/layouts/components/CopyButton.tsx
// this is here so that octopus-format works without any patches
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useClipboard } from 'use-clipboard-copy'
import Icon from 'modules/Icon'
function mixpanelTrack(..._) {}

const Message = styled.span<{ position: 'right' | 'left' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => `${props.position}: 2rem`};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primaryLight};
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.75rem;
  height: 1.5rem;
  color: ${(props) => props.theme.primaryDark};
`
const CopyEndpointUri = styled.span`
  position: relative;

  svg {
    fill: ${(props) => props.theme.primaryNormal};
  }

  > button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }

    :focus {
      outline: none;
    }
  }
`

type Props = {
  copyContent: string
  className?: string
  trackingOptions?: {
    [key: string]: string
  }
  isCodeSample?: boolean
  icon?: 'anchor' | 'copy'
  position?: 'right' | 'left'
}

const EndpointField: React.FC<Props> = ({
  copyContent,
  isCodeSample,
  className,
  trackingOptions,
  icon = 'copy',
  position = 'right',
}) => {
  const { copy, copied } = useClipboard({ copiedTimeout: 1000 })

  const copyUri = useCallback(() => {
    mixpanelTrack('copy', { ...trackingOptions })

    if (isCodeSample) {
      const formatedCopyContent = copyContent.replace(/\\\\n|\\n/g, '\n').replace(/\\"/g, '"')
      return copy(formatedCopyContent.substr(1, formatedCopyContent.length - 2))
    }

    return copy(copyContent)
  }, [trackingOptions, copyContent, isCodeSample, copy])

  return (
    <CopyEndpointUri className={className}>
      <button onClick={copyUri}>
        <Icon name={icon} />
      </button>
      {copied && <Message position={position}>Copied!</Message>}
    </CopyEndpointUri>
  )
}

export default EndpointField
