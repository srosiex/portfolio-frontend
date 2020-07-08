import React, { Component } from 'react'
import {cookbookss} from '../photos/cookbookss.png'
import projects from './projectInfo'
import ProjCard from '../containers/ProjCard'


export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }
    }

     projectList = () => projects.map(p=> <ProjCard name={p.name} />)

    render() {
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
                    <div className="content">
                        {this.projectList()}
                    </div>
                </div>

        )
    }
}

export default Projects
