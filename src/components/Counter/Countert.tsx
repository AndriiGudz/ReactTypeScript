import { useState } from 'react'
import './styles.css'
import Button from '../Button/Button'
import { CounterProps } from './types'

function Counter({ count, onMinusClick, onPlusClick }: CounterProps) {
  // Комментируем или удаляем весь функционал, после поднятия состояния!!! (мы подняли состояние в Lessons 07)

  // const [count, setCount] = useState<number>(5)

  // const onMinusClick = (): void => {
  //   setCount((prevCount) => prevCount - 1)
  // }

  // const onPlusClick = (): void => {
  //   setCount((prevValue) => prevValue + 1)
  // }

  return (
    <div className="counter-component">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  )
}

export default Counter
