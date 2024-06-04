import { useState } from 'react'
import './styles.css'
import Counter from 'components/Counter/Counter'

function Lessons07() {
  // generic
  type CustomArrayType<T> = T[]
  const numberArray: CustomArrayType<string> = ['string', 'string']
  const booleanArray: CustomArrayType<boolean> = [true, false, true]

  type CustomTupel<T = number> = [number, string, T]
  const arrayMix: CustomTupel<string> = [2, 'blue', 'black']
  const arrayMix2: CustomTupel = [3, 'red', 4]

  // generic & interface
  interface Fruits<T> {
    title: string
    addres: T
  }

  const fruit1: Fruits<number> = {
    title: 'Apple',
    addres: 29,
  }

  interface Address {
    country: string
    city: string
  }

  const fruit2: Fruits<Address> = {
    title: 'Lemon',
    addres: {
      country: 'Germany',
      city: 'Berlin',
    },
  }

  // enum
  enum Colors {
    Red,
    Black,
    Green = 'Green',
  }
  let color: Colors = Colors.Green
  console.log(Colors)

  // enum + object
  enum UserRole {
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest',
  }

  interface User {
    name: string
    role: UserRole
  }

  const adminUser: User = {
    name: 'Alice',
    role: UserRole.ADMIN,
  }

  const adminUser2: User = {
    name: 'Alex',
    role: UserRole.ADMIN,
  }

  // Поднятие состояния
  const [count, setCount] = useState<number>(0)

  const onMinusClick = (): void => {
    setCount((prevCount) => prevCount - 1)
  }

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1)
  }

  //   2. способ - inline стили
const borderObj = {
    borderStyle: 'solid',
    fontSize: '34px',
    color: '#230547'
}
  return (
    <div className="lessons07">
        <div style={borderObj}>Start</div>
      {/* 2. способ - inline стили */}
      <p style={{ fontSize: '24px', color: 'blue' }}>Inline style example</p>
      <Counter
        count={count}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
      <div style={borderObj}>End</div>
    </div>
  )
}

export default Lessons07
