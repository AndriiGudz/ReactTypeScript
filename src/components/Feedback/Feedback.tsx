import React, { useState } from 'react'
import Button from '../Button/Button'
import './styles.css'
import { FeedbackProps } from './types'

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
    <div className="feedback-component">
      <div className="feedback like">
        <Button name="Like 👍" onClick={likePlus} />
        <div className="result">{countLike}</div>
      </div>
      <div className="feedback dislike">
        <Button name="Dislike 👎" onClick={dislikePlus} />
        <div className="result">{countDislike}</div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  )
}

export default Feedback
