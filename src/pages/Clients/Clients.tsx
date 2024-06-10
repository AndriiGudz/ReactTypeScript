import { Link } from 'react-router-dom'
import { ClientsPageWrapper, Title, ClientsInfo } from './styles'

function Clients() {
  return (
    <ClientsPageWrapper>
      <ClientsInfo>
        <Title>Amazon</Title>
        <Link to="/clients/amazon">Узнать подробнее о компании.</Link>
      </ClientsInfo>
      <ClientsInfo>
        <Title>Ebay</Title>
        <Link to="/clients/ebay">Узнать подробнее о компании.</Link>
      </ClientsInfo>
      <ClientsInfo>
        <Title>Netflix</Title>
        <Link to="/clients/netflix">Узнать подробнее о компании.</Link>
      </ClientsInfo>
    </ClientsPageWrapper>
  )
}

export default Clients
