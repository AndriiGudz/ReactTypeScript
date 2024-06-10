import { useContext } from 'react'

import { ContentComponent, DataItem } from './styles'
import { ContentProps } from './types'
import {MainCardContext} from 'lessons/Lessons13/components/MainCard/MainCard'

function Content() {
    // 3. Вызываем хук useContext, в который передаем необходимый контекст
    // При вызове useContext вернет значение, которое хранится внутри контекста (MainCardContext) и оно сохранится в переменную data
const data = useContext(MainCardContext)
console.log(data);


  return (
    <ContentComponent>
      <DataItem>First Name: {data.firstName}</DataItem>
      <DataItem>Last Name: {data.lastName}</DataItem>
      <DataItem>Age: {data.age}</DataItem>
    </ContentComponent>
  )
}

export default Content
