import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const ClientsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`

export const StyledLink = styled(Link)`
  font-size: 18px;
`

export const Title = styled.h2``

export const ClientsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  gap: 20px;
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 2px solid grey;
`
