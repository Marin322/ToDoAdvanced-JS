import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const isLogin = localStorage.getItem('isAuth');
    if (isLogin === "true") {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={!isAuth ? <AuthPage isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" replace/>}/>
        <Route path='/' element={isAuth ? <MainPage/> : <Navigate to="/auth" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
