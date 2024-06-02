
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Landing } from './pages/Landing'
function App() {


  return (
    <div>

      

    <BrowserRouter>
    <AppBar></AppBar>
    <Routes>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>



    </div>
  )
}

function AppBar(){
  const navigate=useNavigate()
  return (
    <>
    <button onClick={()=>{
      
      navigate("/landing")

      }}>Landing</button>

      <button onClick={()=>{

        navigate("/dashboard")

      }}>DashBoard</button>
    
    </>
  )
}

export default App
