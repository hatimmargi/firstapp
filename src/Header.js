import React from 'react'
import reactlogo from './logo192.png'
export default function Header () {
    return (
            <header >
                <nav className="nav">
                <img className='logo' src={reactlogo} alt=""></img>
                <ul  className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            </header>
        )
    }