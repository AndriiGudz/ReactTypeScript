import { useState } from 'react'
import Counter from '../../components/Counter/Counter'
import './styles.css'

function Consultation03() {
  const [count, setCount] = useState<number>(2)
  // let count = 2
  let onPlus = (): void => {
    setCount((prevValue) => {
      if (prevValue === 20) {
        return prevValue
      } else {
        return prevValue + 2
      }
    })
  }

  let onMinus = (): void => {
    if (count > -20) setCount((prevValue) => prevValue - 2)
// else disable = true

  }

  return (
    <div className="consultation03">
      <Counter count={count} onMinusClick={onMinus} onPlusClick={onPlus} disabledMinus={count === -20} disabledPlus={count === 20} />
    </div>
  )
}

export default Consultation03
