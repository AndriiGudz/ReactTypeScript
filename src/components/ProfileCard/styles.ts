import styled from '@emotion/styled'

export const ProfileAvatar = styled.img`
  width: 150px;
  border-radius: 100px;
`

export const ProfileCardBox = styled.div`
  display: flex;
  width: 200px;
  height: 280px;
  padding: 15px;
  border: 1px solid;
  border-radius: 15px;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 10px rgb(54, 54, 133);
  }
`

export const UserName = styled.h2`
  color: black;
`

export const UserInfo = styled.p`
  color: black;
`
