import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Index.tsx'
import SignIn from './component/Login/SignIn/SignIn.tsx'
import SignUp from './component/Login/SignUp/SignUp.tsx'
import Dashboard from './component/Dashboard/Index.tsx';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>      
    </Route>
   
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>

    <Route path='/dashboard' element={<Dashboard/>}>
      <Route></Route>
    </Route>
    
  </Routes>
    
  </BrowserRouter>
 

)
