import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Index:React.FC = () => {
  return (
    <>
    <NavBar/>
    <Outlet></Outlet>
    </>
  )
}

export default Index