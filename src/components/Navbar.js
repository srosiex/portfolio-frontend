import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
    <div  className="navbar">
        <ul>
            <li>Sarah Henderson</li>
            <li><NavLink to={`/`}>Home</NavLink></li>
            <li><NavLink to={`projects`}>Projects</NavLink></li>  
            <li><NavLink to={`about`}>About Me</NavLink></li>                 
            <li><NavLink to={`/blog`}>Blog</NavLink></li>
            <li><NavLink to={`/resume`}>Resume</NavLink></li>
        </ul>
    </div>
        )
    }
}

export default Navbar

