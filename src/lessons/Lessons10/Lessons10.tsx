import React, { useEffect, useState } from 'react'
import Button from 'components/Button/Button'
import { Lessons10Component, ContentBox, BtnBox, Loader } from './styles'

function Lessons10() {
  const [facts, setFacts] = useState<string[]>([])
  const [isShowBoxResult, setIsShowBoxResult] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   useEffect(() => {
  //     getFact();
  //   }, []);

  const getFact = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetch('https://catfact.ninja/fact')
      const result = await response.json()

      if (!response.ok) {
        throw new Error('API error')
      } else {
        setFacts((prevFacts) => [...prevFacts, result.fact])
      }
    } catch (error) {
      console.log('Error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetMoreInfo = () => {
    getFact()
    setIsShowBoxResult(true)
  }

  const handleDeleteAllData = () => {
    setFacts([])
    setIsShowBoxResult(false)
  }

  return (
    <Lessons10Component>
      <BtnBox>
        <Button name="Get more Info" onClick={handleGetMoreInfo} />
      </BtnBox>
      <ContentBox isShowResult={isShowBoxResult}>
      {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          facts.map((fact, index) => (
            <div key={index}>{fact}</div>
          ))
        )}
      </ContentBox>
      <BtnBox>
        <Button name="Delete all Data" onClick={handleDeleteAllData} />
      </BtnBox>
    </Lessons10Component>
  )
}

export default Lessons10
