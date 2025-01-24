import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  )
}

export default App
