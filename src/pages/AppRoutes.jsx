import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import SignIn from './SignIn/SignIn'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}
