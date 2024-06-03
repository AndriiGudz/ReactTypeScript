import './styles.css'
import foto from '../../assets/myFoto.jpg'

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={foto} alt="Avatar" className="profile-avatar" />
      <h2>Andrii Gudz</h2>
      <p>Occupation: student.</p>
      <p>Hobbies: volleyball.</p>
    </div>
  )
}

export default ProfileCard
