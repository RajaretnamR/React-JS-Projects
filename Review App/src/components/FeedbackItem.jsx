import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Card from "./sharder/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";




const FeedbackItem = ({item}) => {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
       <div className='card-wrapper'>
        <h4>{item.text}</h4>

        <div>
            <div className='edit' size="20px" onClick={() => editFeedback(item)}>
               <FaEdit />
            </div>

            <div className='delete' onClick={() => deleteFeedback(item.id)}>
              <FaTrash/>
            </div>
        </div>
       </div>
    </Card>
  )
}

export default FeedbackItem