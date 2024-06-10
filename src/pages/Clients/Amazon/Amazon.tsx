import { useNavigate } from 'react-router-dom'

import Button from 'components/Button/Button'
import { PageWrapper, Title, CompanyInfo } from './styles'

function Amazon() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/clients')
    }

  return (
    <PageWrapper>
      <Title>Amazon</Title>
      <CompanyInfo>
        Amazon (Amazon.com, Inc.) — американская компания, крупнейшая в мире на
        рынках платформ электронной коммерции и публично-облачных вычислений по
        выручке и рыночной капитализациия. Штаб-квартира — в Сиэтле. Основана
        Джеффом Безосом 5 июля 1994 года как интернет-магазин по продаже книг,
        но позже диверсифицировалась, начав продавать видео, MP3, аудиокниги
        (как потоковым способом, так и через возможность загрузки), программное
        обеспечение, видеоигры, электронику, одежду, мебель, еду, игрушки и
        ювелирные изделия. Компания также владеет издательским подразделением
        Amazon Publishing, киностудией Amazon Studios, производит линии бытовой
        электроники, включая электронные книги Kindle, планшеты Amazon Fire,
        Fire TV[англ.] и смарт-динамик Echo, и является крупнейшим в мире
        поставщиком услуг в моделях IaaS и PaaS (Amazon Web Services).
        Поддерживает отдельные розничные сайты для некоторых стран, а также
        предлагает международную доставку своих продуктов в другие страны. Около
        200 миллионов человек подписались на Prime Video.
      </CompanyInfo>
      <Button name="Вернуться назад" onClick={goBack} />
    </PageWrapper>
  )
}

export default Amazon
