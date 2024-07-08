import { theme } from '@/styles/theme'
import styled from 'styled-components'

/**
 * Loading error component
 * @param {LoadingErrorProps} props - The component props
 * @param {string} props.height - The height of the error
 * @param {string} props.source - The loading source
 */
export default function LoadingError({ height, source }: LoadingErrorProps) {
  return (
    <LoadingErrorContainer $height={height}>
      <span>Error loading the {source}</span>
    </LoadingErrorContainer>
  )
}

// Props
type LoadingErrorProps = {
  height: string
  source: string
}

// Styled components
const LoadingErrorContainer = styled.div<{ $height: string }>`
  width: 100%;
  height: ${props => props.$height};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.green};
  background-color: ${theme.lightNavy};
  font-family: ${theme.spaceMono};
`
