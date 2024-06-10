import Content from '../Content/Content'
import { SectionComponent, SectionTitle } from './styles'
import { SectionProps } from './types'

function Section() {
  return (
    <SectionComponent>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionComponent>
  )
}

export default Section
