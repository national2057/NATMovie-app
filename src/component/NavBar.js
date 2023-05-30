import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='flex justify-between items-center bg-black text-white px-20 py-4 sticky top-0 z-10'>
        <div>
          <h1>NATMovies</h1>
        </div>

        <ul className='flex justify-around items-center gap-8'>
          <li><NavLink to='/movie/popular' className='hover:bg-rose-600 p-2 rounded-3xl'>Popular</NavLink></li>
          <li><NavLink to='/movie/top_rated' className='hover:bg-rose-600 p-2 rounded-3xl'>Top-Rated</NavLink></li>
          <li><NavLink to='/movie/upcoming' className='hover:bg-rose-600 p-2 rounded-3xl'>UpComing</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar