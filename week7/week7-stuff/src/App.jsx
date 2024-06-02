
import {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
 const DashBoard= lazy(()=> import('./pages/DashBoard')) 
const Landing= lazy(()=> import('./pages/Landing'))
function App() {


  return (
    <div>

      

    <BrowserRouter>
    <AppBar></AppBar>
    <Suspense fallback={"loading...."}>
    <Routes>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </Suspense>
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
