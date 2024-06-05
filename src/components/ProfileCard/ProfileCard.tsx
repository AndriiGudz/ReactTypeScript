import {ProfileAvatar, ProfileCardBox, UserName, UserInfo} from './styles'
import foto from 'assets/myFoto.jpg'

function ProfileCard() {
  return (
    <ProfileCardBox>
      <ProfileAvatar src={foto} alt="Avatar" />
      <UserName>Andrii Gudz</UserName>
      <UserInfo>Occupation: student.</UserInfo>
      <UserInfo>Hobbies: volleyball.</UserInfo>
    </ProfileCardBox>
  )
}

export default ProfileCard
