import React, { Component } from 'react'
import {Grid, Cell, List,ListItem, ListItemContent} from 'react-mdl'

export class About extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sarah Henderson</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="img" style={{height:'250px'}} />  
                    <br/><b>Contact</b>
                    <p> <i className="fa fa-envelope" aria-hidden="true" />
                              sarahrose.henderson@gmail.com
                    </p>
                    </Cell>
                    <Cell col={6}>
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '15px'}}>
                        Hi! I'm Sarah, a passionate and creative full stack web developer, recently graduated from Flatiron School. Currently in search of full-time employment in the DFW area or remote.

<br/>I have a background in mortgage default and many years experience with client care. Last summer I decided I wanted a career where I had more creative freedom, so I started taking the free course offered by my school. I fell in love with coding and decided to jump into the full-time remote software engineering program. 

<br/>I first dabbled with coding back in the LiveJournal and Myspace days, with creating cute custom layouts for my friends.- but FlatIron School is where I found my passion for developing. I have learned Ruby, Rails, Javascript, React and Redux.

<br/>I am self motivated, love new challenges and problem solving. My goal is to bring value to a team by meeting tech and client needs, and staying abreast on new technologies. Please feel free to reach out if you want to chat about coding, or if you are hiring and think I would be a good fit. 
                            </p>    

                        {/* <h2>Contact</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                         <ListItem>
                          <ListItemContent style={{fontSize: '15px'}}>
                              <i className="fa fa-envelope" aria-hidden="true" />
                              sarahrose.henderson@gmail.com
                          </ListItemContent>
                        </ListItem>
                        <ListItem>
                          <ListItemContent style={{fontSize: '15px'}}>
                              <i className="fa fa-envelope" aria-hidden="true" />
                              sarahrose.henderson@gmail.com
                          </ListItemContent>
                        </ListItem>

                        </List></div> */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About
