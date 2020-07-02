import React, { Component } from 'react'
import profilePic from '../photos/profilepic.jpg'
import {Grid, Cell, Link} from 'react-mdl'

export class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}>
                {/* <img class="profilepic" src={profilePic} />
                <h1>Hello</h1>
                <h3>I'm a fullstack software engineer, vegan mama, & artist.</h3> */}
            <div className="landing-grid">
                <Cell col={12}>
                    <img src={profilePic} alt="profile" className="profile-pic" />
                    <div className="banner-text">
                        <h1>Fullstack Developer</h1>
                        <hr />
                        <p>Ruby | Rails | React | JS</p>

                        <div className="social-links">
                            
                          <a href="https://www.linkedin.com/in/sarahhenderson-dev/" ><i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" /></a>
                            <a href="https://github.com/srosiex" target="_blank"><i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" /></a>   
                            <a href="https://twitter.com/sarahh_codes" target="_blank"><i className="fa fa-twitter-square" rel="noopener noreferrer" aria-hidden="true" /></a>                                       
                        </div>
                    </div>
                
                
                </Cell>

            </div>
            
            
            
            
            </div>
        )
    }
}

export default Home
