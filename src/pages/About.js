import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { Element } from 'react-scroll'


export default class About extends React.Component {
  render() {
    return (
      <Element name="about">
        <div id="about" className="about-bg">
          <div className="about">
            <div className="container">
              <Slide top>
                <h1 className="title">About</h1>
              </Slide>
              <div className="profile-container">
                <Fade>
                  <img src={require('../assets/images/profile.jpg')} alt="Profile" className="img-profile"/>
                </Fade>
                <Fade>
                  <div className="proflle-text-container">
                    <h3 style={{ fontSize: '2.2rem', margin: 0}}>Agus Richard Lubis</h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '35px', color: '#FFCC00', fontWeight: 'bolder' }}>Fullstack Developer and Data Scientist</p>
                    <p style={{ padding: 5 }}>
                      I am a passionate person who loves mathematics, science, and technology.
                      I like to find insights from an seemingly complicated data, make inquiry, and determine how is the best way to solve it.
                      I have experiences in creating Web Application, Mobile Application, Machine Learning Model, performing Exploratory Data Analysis, and more.
                      I consider myself as a curious, passionate, and open-minded person, which will be a great asset to the place I am working at.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}