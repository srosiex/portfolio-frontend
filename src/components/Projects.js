import React, { Component } from 'react'
import {cookbookss} from '../photos/cookbookss.png'
import projects from './projectInfo'


export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }
    }

    displayProj = () => {
        if(projects.category === "react"){
            console.log('react yo')
        }
    }


    render() {
        {console.log('hello')}
        return (
            <div className="projects-body">
                <div className="category-tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} >
                       <ul className="tabs"  >
                       <li>Javascript</li> 
                       <li>Rails</li>
                       <li>Sinatra</li>
                       <li>React</li>
                       </ul>
                </div>
                     <div>
                        <div>
                            <div className="content">
                          {this.displayProj()}
                          {projects.map(c => {
                            return c.category
                          })}
                            </div>
                        </div>
                    </div>
                
          
            </div>
        )
    }
}

export default Projects
