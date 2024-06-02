
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Landing } from './pages/Landing'
function App() {


  return (
    <div>

      <div style={{background:'black', color:'white'}}>
        This is a Top Bar
      </div>

    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>



    </div>
  )
}

export default App
