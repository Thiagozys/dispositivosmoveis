
import './App.css'
import Login from './login'
import Home from './home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cadastro from './cadastro';
function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      

    </div>

  )
}

export default App
