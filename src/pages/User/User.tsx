import { useLocation, useNavigate } from 'react-router-dom'

import Button from 'components/Button/Button'
import {UserPageWrapper, Title} from './styles'

function User() {
const naigate = useNavigate()

const locatioInfo = useLocation()
console.log(locatioInfo);


const goHome = () => {
    naigate('/')
}

    return <UserPageWrapper>
        <Title>User</Title>
        <Button name='Go to Home page' onClick={goHome} />
        </UserPageWrapper>
}

export default User