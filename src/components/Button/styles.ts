import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ButtonCompanent = styled.button`
  width: 100%;
  height: 70px;
  padding: 20px 54px 20px 54px;
  border: none;
  border-radius: 4px;
  opacity: 0px;
  background-color: #1f27f5;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: auto;
  }
`