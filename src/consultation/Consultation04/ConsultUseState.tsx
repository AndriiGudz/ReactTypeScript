import Button from 'components/Button/Button'
import { useState } from 'react'
import { Consultation04Component } from './styles'
import { v4 } from 'uuid'

function ConsulUseState() {
  let counter = 0
  console.log('Render')

  const [value, setValue] = useState(0)
// const returnedValue = useState(0)
// const value = returnedValue[0]
// const setValue = returnedValue[1]

const [array, setArray] = useState<string[]>([])


const HandlerArray = () => {
    setArray((prev) => [...prev, `${prev.length + 1}, `])
}

  const Handler = () => {
    counter += 1
    console.log('Click', counter)
  }

  const PlusValue = () => {
    setValue(value + 1)
    console.log('Plus value');
    
  }

  return (
    <Consultation04Component>
      <Button name="+" onClick={Handler} />
      <div>{counter}</div>
      <Button name="Plus State" onClick={PlusValue} />
      <div>{value}</div>
      <Button name='Array add' onClick={HandlerArray} />
      <div>{array.map((el) => (
        <span key={v4()}>{el}</span>
      ))}</div>
    </Consultation04Component>
  )
}

export default ConsulUseState
