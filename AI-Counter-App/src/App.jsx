import { Routes , Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Counter from "./Pages/Counter"
import Notfound from "./Pages/Notfound"
// import { CounterProvider } from "./Context/GlobalContext"




const App = () => {
  return (

    //  <CounterProvider>
          <Routes>

          <Route path="/" element={ <Landing/> }/>
          <Route path="/Counter" element= { <Counter/> }/>
          <Route path="*" element={ <Notfound/> }/>

        </Routes>
    // </CounterProvider>
  )
}

export default App 