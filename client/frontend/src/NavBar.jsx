import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='ram'>
     <section className="full">
    <nav>
        <div className="saty">Satyam</div>
        <ul className="navbar">
            <li>
                <a className="j" href="#homelink">Home </a>
                <a className="j" href="#aboutid">About</a>
                <a className="j" href="#skilllink">Skills</a>
                <a className="j" href="#projectslink">Projects</a>
                <a className="j" href="#contactlink">Contact me</a>

            </li>
        </ul>
    </nav>
    </section>
        </div>
  )
}

export default NavBar