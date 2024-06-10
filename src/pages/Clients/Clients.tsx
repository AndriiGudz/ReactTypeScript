import { ClientsPageWrapper, Title, ClientsInfo, StyledLink } from './styles'

function Clients() {
  return (
    <ClientsPageWrapper>
      <ClientsInfo>
        <Title>Amazon</Title>
        <StyledLink to="/clients/amazon">Узнать подробнее о компании.</StyledLink>
      </ClientsInfo>
      <ClientsInfo>
        <Title>Ebay</Title>
        <StyledLink to="ebay">Узнать подробнее о компании.</StyledLink>
        {/* можно использовать прямую ссылку, если правильно настроен Route в App */}
      </ClientsInfo>
      <ClientsInfo>
        <Title>Netflix</Title>
        <StyledLink to="/clients/netflix">Узнать подробнее о компании.</StyledLink>
      </ClientsInfo>
    </ClientsPageWrapper>
  )
}

export default Clients
