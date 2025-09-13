import Card from "./sharder/Card"
import Button from "./sharder/Button"
import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';



const FeedbackForm = () => {

  const { addFeedback , feedbackEdit ,updateFeedback  } = useContext(FeedbackContext);


  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  
  const handleTextChange = (e) => {
    
    const trimmedText = e.target.value.trimStart();
    
    let textError = "";
    
    if(trimmedText.length < 10){
      textError = "Character must be at least 10";
      setMessage(textError);
      setBtnDisabled(true);
    }else{
      setMessage("");
      setBtnDisabled(false);
    }
    
    setText(trimmedText);
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFeedback = {
      id:uuidv4(),
      text
    }

    if(feedbackEdit.edit === true){
      // console.log("Hello item is ready too update ? ")
       updateFeedback(feedbackEdit.item.id, { text });
    }else{
      addFeedback(newFeedback);
      console.log("Hello Item added succesfully ")
    }


    // addFeedback(newFeedback);
    
    setText("");
    setBtnDisabled(true);
  }

  //Epa na edit button ah click panureno apa mattum indah side effect run aagum :
  useEffect(() => {

    if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text);
      setBtnDisabled(false)
    }
  },[feedbackEdit]);

    //   if (feedbackEdit.edit === true) {
    //   editFeedback(feedbackEdit.item.id, { text });
    // } else {
    //   addFeedback(newFeedback);
    // }

  return (
    <Card>
        <h3>Add Your Reviews</h3>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" placeholder="Enter your ideas"
                onChange={handleTextChange} value={text}/>
                <Button version="primary" type="submit" isDisabled={btnDisabled}>
                    {feedbackEdit.edit ? "Update" : "Send"}
                </Button>
            </div>

            <p className="message">{message && message}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm

