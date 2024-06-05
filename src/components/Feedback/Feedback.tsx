import React, { useState } from 'react'
import {FeedbackComponent, FeedbackBtn, Result} from './styles'
import { FeedbackProps } from './types'
import Button from 'components/Button/Button'

function Feedback({likePlus, countLike, dislikePlus, countDislike, resetResults}: FeedbackProps) {
  // const [countLike, setLike] = useState<number>(0)
  // const [countDislike, setDislike] = useState<number>(0)

  // const likePlus = (): void => {
  //   setLike((prevCount) => prevCount + 1)
  // }

  // const dislikePlus = (): void => {
  //   setDislike((prevCount) => prevCount + 1)
  // }

  // const resetResults = (): void => {
  //   setLike(0)
  //   setDislike(0)
  // }

  return (
    <FeedbackComponent>
      <FeedbackBtn>
        <Button name="Like 👍" onClick={likePlus} />
        <Result>{countLike}</Result>
      </FeedbackBtn>
      <FeedbackBtn>
        <Button name="Dislike 👎" onClick={dislikePlus} />
        <Result>{countDislike}</Result>
      </FeedbackBtn>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackComponent>
  )
}

export default Feedback
