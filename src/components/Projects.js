import React, { Component } from 'react'
import {cookbookss} from '../photos/cookbookss.png'
import projects from './projectInfo'
import ProjCard from '../containers/ProjCard'


export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 'react'
        }
    }

    projectList = (projects) => projects.map(p=> <ProjCard projects={p} />)

    handleClick = e => {
        e.preventDefault()
        this.setState({
            activeTab: e.target.value
        })
    }

    filterProj = () => {
        let filteredList = '';
        if(this.state.activeTab === 'react'){
            filteredList = projects.filter(p=>p.category==='react')
        }else if(this.state.activeTab === 'javascript'){
            filteredList = projects.filter(p=>p.category ==='javascript')
        }
        
        return filteredList
    }

    render() {
        console.log(this.state)
        return (
            <div className="projects-body">
                <div className="category-tabs">
                       <ul className="tabs">
                       <li><button value="javascript" onClick={this.handleClick}>javascript</button></li> 
                       <li>Rails</li>
                       <li>Sinatra</li>
                       <li><button value="react" onClick={this.handleClick}>react</button></li>
                       </ul>
                </div>
                    <div className="content">
                        {this.projectList(this.filterProj())}
                    </div>
                </div>

        )
    }
}

export default Projects
