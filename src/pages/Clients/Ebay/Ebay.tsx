import { useNavigate } from 'react-router-dom'

import Button from 'components/Button/Button'
import { PageWrapper, Title, CompanyInfo } from './styles'

function Ebay() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/clients')
  }

  return (
    <PageWrapper>
      <Title>Ebay</Title>
      <CompanyInfo>
        eBay Inc. (произносится ибэ́й) — американская компания, предоставляющая
        услуги в областях интернет-аукционов (основное поле деятельности) и
        интернет-магазинов. Веб-сайтом eBay.com и его местными версиями в
        нескольких странах владела компания eBay Enterprise, но продала это
        подразделение в 2015 году частным инвестиционным компаниям Sterling
        Partners и Premiera Funds.
      </CompanyInfo>
      <Button name="Вернуться назад" onClick={goBack} />
    </PageWrapper>
  )
}

export default Ebay
