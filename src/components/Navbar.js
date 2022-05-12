import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'

export default function Navbar() {
    const auth = useAuth()
  return (
    <nav>
        <ul>
            <li>
                <NavLink activeClass='active' exact to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink  activeClass='active' to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink  activeClass='active' to='/contact'>contact</NavLink>
            </li>
            <li>
                <NavLink  activeClass='active' to='/Categories'>Categories</NavLink>
            </li>
                <NavLink  activeClass='active' to='/login'>login</NavLink>
            <li>
             <NavLink  activeClass='active' to='/registre'>registre</NavLink>
            </li>
            <li>
                <NavLink  activeClass='active' to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink  activeClass='active' to='/payments'>payments</NavLink>
            </li>
            <li>
            <button onClick={auth.logout}>
                    logou
            </button>
                
            </li>
            
        </ul>
    </nav>
  )
}
