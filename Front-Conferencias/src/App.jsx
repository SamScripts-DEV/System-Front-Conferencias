import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/Dashboard'
import Conferencista from './Pages/Conferencista'
import Reserva from './Pages/Reserva'
import Auditorio from './Pages/Auditorio'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/auditorios' element={<Auditorio />} />
          <Route path='/conferencistas' element={<Conferencista />} />
          <Route path='/reservas' element={<Reserva />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
