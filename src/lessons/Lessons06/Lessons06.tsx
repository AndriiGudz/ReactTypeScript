import BlinkingText from '../../components/BlinkingText/BlinkingText'
import './styles.css'

// 1. Типизация строк - String
let userName: string = 'Bob'
// userName = true
userName = '2'
userName = 1 + 2 + '3'
// userName = '4' / '2'
console.log(userName)

let message: string = `Hello, ${userName}`

// 2. Типизация чисел - number
let luckyNumber: number = 7
luckyNumber = 7.7
luckyNumber = NaN
// luckyNumber = 2 + '1'

// 3. Типизация логического типа - boolean
let isAdmin: boolean = true
// isAdmin = 0
isAdmin = false
isAdmin = 2 > 3
console.log(isAdmin)

// 4. Типизация null и undefined
let emptyValue: null = null
// emptyValue = 0
// emptyValue = undefined

let empty: undefined = undefined
// empty = ''

//  5. Типизация массива
const colors: string[] = ['red', 'black', 'green']
// colors.push(2)
colors.push('')
colors[0] = 'yellow'
console.log(colors)

// 6. Типизация tupel (кортеж)
const fruits: [string, number, boolean] = ['apple', 3, true]
// fruits[2] = true

// 7. Типизация функции
const showMessage = (): void => {
  console.log('Hello')
}
showMessage()

const showNumber = (): number => {
  return 4
}
console.log(showNumber())

// 8. Типизация any
let city: any = 23
city = 'Warsaw'
city = [2, '', true]

// 9. Типизация функции с параметрами
const arrUser = (
  firsName: string = 'User',
  age: number = 30
): [string, number] => {
  return [firsName, age]
}
arrUser('Mary', 23)
// arrUser('Tom', '32')
arrUser()

// 10. Автоматическое определение типа
const numAr = [2, 4, 5]
// numAr.push('red')
let str = true
// str = ''
const mixArray = ['grape', 5, false, null]
mixArray[4] = 'red' // можно добавлять только те типы, которые уже есть в массиве

// 11. Union типы
let numStr: string | number | number[] = 2
numStr = '3'
numStr = [2, 3]

// 12. Типизация объектов с помощью interface и type
interface User {
    name?: string,
    age: number | string
}

interface User {
    job: string
}

const userData: User = {
    age: 25,
    job: 'Manager'
}

userData.age = '26'
// userData.job = 'Manager'


interface Admin extends User {
    isAdmin: boolean
}

const adminData: Admin = {
    age: 34,
    job: 'Admin',
    isAdmin: false
}

// type
type Weight = string | number

type Animal = {
    name: string,
    weight: Weight
}

const animal: Animal = {
    name: 'Lion',
    weight: 200
}

type NewAnimal = Animal & {country: string}

const newAnimal: NewAnimal = {
    country: 'Afrika',
    name: 'Zebra',
    weight: 150
}

function Lessons06() {
  return (
    <div className='lesson06'>
      <BlinkingText /> {message}
    </div>
  )
}

export default Lessons06
