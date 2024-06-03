import { useState } from 'react'
import './styles.css'
import Button from '../Button/Button'

function Counter() {
  const [count, setCount] = useState<number>(5)

  const onMinusClick = (): void => {
    setCount((prevCount) => prevCount - 1)
  }

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1)
  }

  return (
    <div className="counter-component">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  )
}

export default Counter
