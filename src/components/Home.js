import React, { Component } from 'react'
import profilePic from '../photos/profilepic.jpg'


export class Home extends Component {
    render() {
        return (
            
            <div className="home-wrapper">
                <div className="home-content">
                    <img src={profilePic} alt="profile" className="profile-pic" />
                    <div className="banner-text">
                        <h1>Sarah Henderson</h1>
                        <h2>Fullstack Developer</h2>
                        <hr />
                        <p>Ruby | Rails | React | JS</p>

                        <div className="social-links">
                            
                          <a href="https://www.linkedin.com/in/sarahhenderson-dev/" target="_blanks" rel='noreferrer noopener' >{null}<i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" /></a>
                            <a href="https://github.com/srosiex" target="_blank" rel='noreferrer noopener'>{null}<i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" /></a>   
                            <a href="https://sarahcodes.blogspot.com/" target="_blank" rel='noreferrer noopener'>{null}<i className="fa fa-pencil-square" rel="noopener noreferrer" aria-hidden="true" /></a>                                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home
