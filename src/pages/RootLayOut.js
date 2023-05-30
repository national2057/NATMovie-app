import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <>
      <NavBar />

      <Outlet />

    </>
  )
}

export default RootLayOut