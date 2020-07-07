import React, { Component } from 'react'
import photoprof from '../photos/photoprof.jpg'

export class About extends Component {
    render() {
        return (
            <><div className="contact-body">
                <div className="contact-grid">
                    <div>
                        <img src={photoprof} alt="img" style={{height:'250px'}} />  
                    <hr />
                    <p> <i className="fa fa-envelope" aria-hidden="true" /> 
                              <a href="mailto:sarahrose.henderson@gmail.com">sarahrose.henderson@gmail.com</a>
                    </p>
                  </div>
                    <div className="about-info">
                    <h2>About Me</h2>
                    <p style={{ width: '100%', margin: 'auto', fontSize: '15px'}}>
                        Hi! I'm Sarah, a passionate and creative full stack web developer, recently graduated from Flatiron School. Currently in search of full-time employment in the DFW area or remote.

<br/>I have a background in mortgage default and many years experience with client care. 
<br/>I am self motivated, love new challenges and problem solving. My goal is to bring value to a team by meeting tech and client needs, and staying abreast on new technologies. Please feel free to reach out if you want to chat about coding, or if you are hiring and think I would be a good fit. 
                            </p>   
                    </div>
                </div>
            </div>
             <div className="contact-form-body">
                 <div className="contact-form">
                  <form action="mailto:sarahrose.henderson@gmail.com" method="post" enctype="text/plain" contentEditable>
                      <h2>Contact Me</h2>
                      <div className="form-text">
                      <input type="text" name="name" placeholder="Name" />
                      </div>
                      <br />
                      <div className="form-text">
                      <input type="email" name="email" placeholder="Email" />
                      </div>
                      <br />
                      <div className="form-text">
                          <textarea placeholder="Message"></textarea>
                      </div>
                      <br />

                        <a class="btn">Send</a>

                  </form>
                  </div>
             </div></>
            
        )
    }
}

export default About
