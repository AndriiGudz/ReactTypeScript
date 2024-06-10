import { createContext, useState } from 'react'
import Section from '../Section/Section'
import { MainCardComponent, MainCardTitle } from './styles'
import { UserData } from './types'

// 1. Создание независимого хранилища - контекст
export const MainCardContext = createContext<UserData>({
  firstName: '',
  lastName: '',
  age: 0,
})

function MainCard() {
  const [userData, setUserDat] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 12,
  })

  return (
    // 2. Создаем обертку, которая позволит получить значение из контекста в любом компоненте, который будет вложен внутри обертки
    <MainCardContext.Provider value={userData}>
    <MainCardComponent>
      <MainCardTitle>Main Card</MainCardTitle>
      <Section />
    </MainCardComponent>
    </MainCardContext.Provider>
  )
}

export default MainCard
