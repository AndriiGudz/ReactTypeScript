import { ChangeEvent, useEffect, useState } from 'react'
import Input from 'components/Input/Input'
import { Lessons09Component, Result, Img } from './styles'
import { error } from 'console'

function Lessons09() {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputValue2, setInputValue2] = useState<string>('')
  const [dogImageUrl, setDogImageUrl] = useState<string>('')
  console.log(dogImageUrl);
  

  console.log('Lesson 09 update')
  const example = 23
  console.log(example)

  const getDogPhoto = async() => {
    try{
      const respons = await fetch('https://dog.ceo/api/breeds/image/random')
      const result = await respons.json()
      console.log(result);

      if (!respons.ok) {
        throw Object.assign(new Error('API error'), {error: result})
      } else {
        setDogImageUrl(result.message)
      }
      
    } catch(error) {
      console.log('Error');
      
    }
  }

// Выполняем функцию при загрузке страницы
useEffect(() => {getDogPhoto()}, [])

// Выполняем функцию при изменении значения в первом поле
useEffect(() => {getDogPhoto()}, [inputValue])

  // Вызов useEffect() в момент создания компонента
  useEffect(() => {
    console.log('Mounting')
  }, [])

  // Вызов useEffect() в момент изменения в первом поле
  useEffect(() => {
    console.log('Update')
  }, [inputValue, inputValue2])

  // Вызов useEffect() в момент перед удалением компонента (размонтированием)
  useEffect(() => {
    return () => {
      console.log('Unmounting')
    }
  })

  const onChangeExampleInput = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setInputValue(event.target.value)
  }

  const onChangeExampleInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setInputValue2(event.target.value)
  }

  return (
    <Lessons09Component>
      {/* Неконтролируемый компонент */}
      {/* <Input name='example' placeholder='Uncontrol' /> */}

      <Input
        name="exaple-control"
        placeholder="Example control"
        value={inputValue}
        onChange={onChangeExampleInput}
      />
      <Result>{inputValue}</Result>
      <Input
        name="exaple-control"
        placeholder="Example control"
        value={inputValue2}
        onChange={onChangeExampleInput2}
      />
      <Result>{inputValue2}</Result>
      <Img src={dogImageUrl} />
    </Lessons09Component>
  )
}

export default Lessons09
