import React, { Component } from 'react'
import {Grid, Cell, List,ListItem, ListItemContent} from 'react-mdl'
import photoprof from '../photos/photoprof.jpg'

export class About extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={5}>
                        <h2>Sarah Henderson</h2>
                        <img src={photoprof} alt="img" style={{height:'250px'}} />  
                    <hr />
                    <p> <i className="fa fa-envelope" aria-hidden="true" /> 
                              <a href="mailto:sarahrose.henderson@gmail.com">sarahrose.henderson@gmail.com</a>
                    </p>
                  </Cell>
                    <Cell className="about-content" col={4}>
                    <p style={{paddingTop: '25px', width: '100%', margin: 'auto', fontSize: '15px'}}>
                        Hi! I'm Sarah, a passionate and creative full stack web developer, recently graduated from Flatiron School. Currently in search of full-time employment in the DFW area or remote.

<br/>I have a background in mortgage default and many years experience with client care. 
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
