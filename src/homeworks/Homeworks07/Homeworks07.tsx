import { useState } from 'react'
import Feedback from '../../components/Feedback/Feedback'
import './styles.css'

function Homeworks07() {
    const [countLike, setLike] = useState<number>(0)
    const [countDislike, setDislike] = useState<number>(0)
  
    const likePlus = (): void => {
      setLike((prevCount) => prevCount + 1)
    }
  
    const dislikePlus = (): void => {
      setDislike((prevCount) => prevCount + 1)
    }
  
    const resetResults = (): void => {
      setLike(0)
      setDislike(0)
    }

    return (
        <div className='homeworks07'>
            <Feedback 
            countLike = {countLike}
            countDislike = {countDislike}
            likePlus = {likePlus}
            dislikePlus = {dislikePlus}
            resetResults = {resetResults}
            />
        </div>
    )
}

export default Homeworks07