import React, { Component } from 'react'
import resume from '../photos/res.png'

export class Resume extends Component {
    render() {
        return (
            <div className="resume-page">
                <h1>Resume</h1>
               <img className="resumeImg" alt="resume" src={resume}/>
            </div>
        )
    }
}

export default Resume
