import { Route, Routes } from 'react-router'
import './App.css'
import CreateData from './components/CreateData/CreateData'
import ViewData from './components/ViewData/ViewData'
import Header from './components/Header/Header'
import UpdateData from './components/UpdateData/UpdateData'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<CreateData />} />
        <Route path='/viewData' element={<ViewData />} />
        <Route path='/updateData' element={<UpdateData />} />
      </Routes>
      
    </>
  )
}

export default App
