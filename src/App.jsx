import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/general/navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
