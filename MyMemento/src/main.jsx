import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Landingpage } from '../Components/Landingpage'
import SignUpSignIn from '../Components/SignUpSignIn'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/app/*' element={<App/>}/>
          <Route path='/login' element={<SignUpSignIn/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
