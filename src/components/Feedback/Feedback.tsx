import React, { useState } from 'react'
import Button from '../Button/Button'
import './styles.css'

function Feedback() {
  const [countLike, setLike] = useState<number>(0)
  const [countDislike, setDislike] = useState<number>(0)

  const likePlus = () => {
    setLike((prevCount) => prevCount + 1)
  }

  const dislikePlus = () => {
    setDislike((prevCount) => prevCount + 1)
  }

  const resetResults = () => {
    setLike(0)
    setDislike(0)
  }

  return (
    <div className="feedback-component">
      <div className="feedback like">
        <Button name="Like 👍" onClick={likePlus} />
        <div className="like-result">{countLike}</div>
      </div>
      <div className="feedback dislike">
        <Button name="Dislike 👎" onClick={dislikePlus} />
        <div className="dislike-result">{countDislike}</div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  )
}

export default Feedback
