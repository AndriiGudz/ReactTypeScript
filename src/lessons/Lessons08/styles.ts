import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonStyleComponentProps {
  mainButton?: boolean
}

const commonBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Lessons08Component = styled.div`
  ${commonBoxStyles}
  gap: 20px;
  flex: 1;
  padding: 40px;
`
export const BoxInfo = styled.div`
  ${commonBoxStyles}
  width: 250px;
  height: 250px;
  background-color: blue;
  color: white;
`
export const ButtonStyleComponent = styled.button<ButtonStyleComponentProps>`
  width: 200px;
  height: 70px;
  border: none;
  /* background: #E619A5; */
  background: ${(props) => (props.mainButton ? '#E619A5' : '#C619E6')};
  border-radius: 6px;
  font-size: ${({ mainButton }) => (mainButton ? '24px' : '20px')};
  padding: 10px;
  cursor: pointer;

  &:hover{
    background: #AE5EC0;
  }
`

export const ButtonBox = styled.div`
  ${commonBoxStyles}
  flex-direction: row;
  gap: 20px;
  width: 700px;
  height: 100px;
  background: #e1a3e9;
  padding: 20px;
`
