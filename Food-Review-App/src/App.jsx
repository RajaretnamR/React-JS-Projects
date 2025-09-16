import {Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import FoodDetails from './Pages/FoodDetails'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'


const App = () => {

  return (
    
    <div>
       {/* Navbar edhuku venum na Routes kulla podakudadhu */}
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodDetails/:id" element={<FoodDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </div>
   
  )
}

export default App