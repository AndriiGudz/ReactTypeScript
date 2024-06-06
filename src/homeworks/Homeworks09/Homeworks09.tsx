import Input from 'components/Input/Input'
import {
  Homeworks09Component,
  BoxResult,
  Result,
  BtnBox,
  TitelBox,
  SpanBox,
} from './styles'
import { ChangeEvent, useState } from 'react'
import Button from 'components/Button/Button'

function Homeworks09() {
  // хранилище для инпутов
  const [inputValue1, setInputValue1] = useState<string>('')
  const [inputValue2, setInputValue2] = useState<string>('')

  // хранилище для вывода результатов
  const [result1, setResult1] = useState<string>('')
  const [result2, setResult2] = useState<string>('')

  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value)
  }

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value)
  }

  //   функция кнопки для вывода значений из инпутов в отдельные блоки
  const handleButtonClick = () => {
    setResult1(inputValue1)
    setResult2(inputValue2)
  }

  return (
    <Homeworks09Component>
      <Input
        name="Input 1"
        placeholder="Input 1 ..."
        value={inputValue1}
        onChange={handleInputChange1}
      />
      <Input
        name="Input 2"
        placeholder="Input 2 ..."
        value={inputValue2}
        onChange={handleInputChange2}
      />
      <BtnBox>
        <Button name="Вывести значение" onClick={handleButtonClick} />
      </BtnBox>
      <BoxResult>
        <Result>
          <TitelBox>Результат Input 1</TitelBox>
          <SpanBox>{result1}</SpanBox>
        </Result>
        <Result>
          <TitelBox>Результат Input 2</TitelBox>
          <SpanBox>{result2}</SpanBox>
        </Result>
      </BoxResult>
    </Homeworks09Component>
  )
}

export default Homeworks09
