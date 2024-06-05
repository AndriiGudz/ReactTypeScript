import { useState } from 'react'
import {CounterComponent, CounterResult} from './styles'
import { CounterProps } from './types'
import Button from 'components/Button/Button'

function Counter({count, onMinusClick, onPlusClick, disabledMinus, disabledPlus}: CounterProps) {

  // Комментируем или удаляем весь функционал, после поднятия состояния!!! (мы подняли состояние в Lessons 07)

  // const [count, setCount] = useState<number>(5)

  // const onMinusClick = (): void => {
  //   setCount((prevCount) => prevCount - 1)
  // }

  // const onPlusClick = (): void => {
  //   setCount((prevValue) => prevValue + 1)
  // }

  return (
    <CounterComponent>
      <Button name="-" onClick={onMinusClick} disabled={disabledMinus} />
      <CounterResult>{count}</CounterResult>
      <Button name="+" onClick={onPlusClick}  disabled={disabledPlus} />
    </CounterComponent>
  )
}

export default Counter
