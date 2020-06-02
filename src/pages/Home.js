import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'


export default class Home extends React.Component {
  render() {
    return (
      <div id="home" className="home-bg">
        <div className="home">
          <Slide top>
            <p style={{ padding: '0.5rem', margin: 0}}>Hi, I'm Agus Richard Lubis.</p>
          </Slide>
          <Slide bottom>
            <p style={{ padding: '0.5rem', margin: 0}}>I'am a Full Stack Developer and Data Scientist.</p>
          </Slide>
          <Zoom>
            <div style={{ marginTop: '1.5rem' }}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/agusrichard"><FontAwesomeIcon icon={ faGithub } className="home-icon" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/agusrichard21/"><FontAwesomeIcon icon={ faInstagram } className="home-icon" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agus-richard/"><FontAwesomeIcon icon={ faLinkedin } className="home-icon" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/agus.richard.16"><FontAwesomeIcon icon={ faFacebookSquare } className="home-icon" /></a>
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}