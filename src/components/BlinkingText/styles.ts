import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

// Определение анимации
const blinkingText = keyframes`
  0% { color: red; }
  25% { color: green; }
  50% { color: blue; }
  75% { color: yellow; }
  100% { color: red; }
`

export const BlinkingTextComponent = styled.div`
  font-size: 32px;
  font-weight: bold;
  animation: ${blinkingText} 3s infinite;
`
