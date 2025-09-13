
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// 1. Context object create panniruken :
const FeedbackContext = createContext();

// 2. Provider component define panniruken
export const FeedbackProvider = ({ children }) => {


  //3. State define panniruken
    const [feedback, setFeedback] = useState([]);


    // 4. Edit state define panniruken :
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })



        const addFeedback = async (newFeedback) => {
        try {
            const response = await axios.post("http://localhost:3000/tasks", newFeedback, {
            headers: { "Content-Type": "application/json" }
            });

            // response.data la server kudutha id irukum
            setFeedback([response.data, ...feedback]);
        } catch (err) {
            console.log("There is some Error da !....");
        }
        };

        const updateFeedback = async (id, updatedItem) => {
        try {
            const response = await axios.put(`http://localhost:3000/tasks/${id}`, updatedItem, {
            headers: {
                "Content-Type": "application/json"
            }
            });

            // State update (frontend la reflect aaganum)
            setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...response.data } : item))
            );

        } catch (err) {
            console.log("There is some Error da while updating!....");
        }
        };


        const deleteFeedback = async (id) => {
        if (window.confirm("Are You Sure")) {
            try {
            await axios.delete(`http://localhost:3000/tasks/${id}`);
            setFeedback(feedback.filter(item => item.id !== id));
            } catch (err) {
            console.log("There is some Error da !....");
            }
        }
        };

    useEffect(() => { 
        console.log("hello")
        

        fetchFeedback();
    },[]);


    // Data va get pani eduthutu varadhuku :
    const fetchFeedback = async () => {

        try{
            const response = await axios.get("http://localhost:3000/tasks");
            setFeedback(response.data)

        }catch(err){
            console.log("Edo thau paniruka da ??")
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item:item,  
            edit:true
        });

    }



    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            addFeedback,
            deleteFeedback,
            editFeedback,
            updateFeedback
            
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;