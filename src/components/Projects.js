import React, { Component } from 'react'
import {cookbookss} from '../photos/cookbookss.png'


export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0){
            return(
                //Project 1 //
                <div className="projects-grid">
                <div shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <div style={{color: '#fff', height:'176px', background: 'url({cookbookss}) center / cover '}}>
                        Cookbook
                    </div>
                    <div>Developed a single page web app for users to input recipes, organize by their favorites, and add comments.
                    </div>
                    <div border>
                        <a href="https://github.com/srosiex/cookbook-frontend" target="_blank">Github</a>
                        <a href="https://cookbook-sh.netlify.app/" target="_blank">Live Demo</a>
                        <a href="https://www.youtube.com/watch?v=n48req87c80&feature=youtu.be" target="_blank">Youtube</a>
                    </div>
                    <div style={{color: '#fff'}}>
                        <button name="share" />
                    </div>
                </div>

                <div shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <div style={{color: '#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover '}}>
                        React Project 1
                    </div>
                    <div>asdflaksdjfa asdflaskdfalsdfj asdflkjasdkf</div>
                    <div border>
                        <button>Github</button>
                        <button>Demo</button>
                        <button>Youtube</button>
                    </div>
                    <div style={{color: '#fff'}}>
                        <button name="share" />
                    </div>
                </div>

                </div>
                
            )
        }else if(this.state.activeTab === 1){
            return(
                <div shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <div style={{color: '#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover '}}>
                    React Project 1
                </div>
                <div>asdflaksdjfa asdflaskdfalsdfj asdflkjasdkf</div>
                <div border>
                    <button colored>Github</button>
                    <button colored>Demo</button>
                    <button colored>Youtube</button>
                </div>
                <div style={{color: '#fff'}}>
                    <button name="share" />
                </div>
            </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <div style={{color: '#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover '}}>
                    React Project 1
                </div>
                <div>asdflaksdjfa asdflaskdfalsdfj asdflkjasdkf</div>
                <div border>
                    <button colored>Github</button>
                    <button colored>Demo</button>
                    <button colored>Youtube</button>
                </div>
                <div style={{color: '#fff'}}>
                    <button name="share" />
                </div>
            </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <div style={{color: '#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover '}}>
                    React Project 1
                </div>
                <div>asdflaksdjfa asdflaskdfalsdfj asdflkjasdkf</div>
                <div border>
                    <button colored>Github</button>
                    <button colored>Demo</button>
                    <button colored>Youtube</button>
                </div>
                <div style={{color: '#fff'}}>
                    <button name="share" />
                </div>
            </div>
            )
        }
    }


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
                {/* <section className="projects-grid"> */}
                    <div>
                        <div>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </div>
                    </div>
                {/* </section> */}
          
            </div>
        )
    }
}

export default Projects
