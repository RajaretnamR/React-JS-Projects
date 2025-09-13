// import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


const App = () => {

 
  // const [feedback, setFeedback] = useState([
  //   {
  //     id:1,
  //     text:"This is a sample 1"
  //   },
  //   {
  //     id:2,
  //     text:"This is a sample 2"
  //   },
  //   {
  //     id:3,
  //     text:"This is a sample 3"
  //   }
  // ]);


  // const addFeedback = (newFeedback) => {
  //   setFeedback([newFeedback, ...feedback]);
  // }

  // const deleteFeedback = (id) => {
  //   if(window.confirm("Are You Sure")){
  //     setFeedback(feedback.filter(item => item.id !== id))
  //   }
  // }


  return (
    <div>
      <Header text=" My Review App" bgColor="blue" textColor="white"/>   
      <div className="container">
         <FeedbackForm/>
         <FeedbackStats/>
         <FeedbackList/>
      </div>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App