import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {

  const { feedback } = useContext(FeedbackContext);

  return (
    <div style={{
        margin:"10px 0px"
    }}>
       <h4> The Item Length is : {feedback.length}</h4>
    </div>
  )
}

export default FeedbackStats