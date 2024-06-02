
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Landing } from './pages/Landing'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App
