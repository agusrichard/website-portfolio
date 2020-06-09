import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import { Element } from 'react-scroll'


export default class Education extends React.Component {
  render() {
    return (
      <Element name="edu-cert">
        <div id="education" className="education-bg">
          <div className="education">
            <div className="container">
              <Slide top>
                <h1 className="title">Educations and Certificates</h1>
              </Slide>
              <div className="education-container">
                <Zoom>
                  <div className="education-box">
                    <h3 className="education-title">Educations</h3>
                    <div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Universitas Indonesia</p>
                        <p className="left-indent">Mathematics</p>
                      </div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Arkademy Tech Education Platform</p>
                        <p className="left-indent">Full Stack Development</p>
                      </div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>DataCamp</p>
                        <p className="left-indent">Data Science and Data Analyst with Python</p>
                      </div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="education-box">
                    <h3 className="education-title">Certificates</h3>
                    <div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Data Science with Python Track</p>
                        <p className="left-indent">@DataCamp -- <a href="https://drive.google.com/file/d/1asTz2Vbfe5rufg8DZ7clIpYba8clcIxI/view?usp=sharing" className="certification-link" rel="noopener noreferrer" target="_blank">Validate here</a></p>
                      </div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Responsive Web Design Certification</p>
                        <p className="left-indent">@freeCodeCamp -- <a href="https://www.freecodecamp.org/certification/agusrichard21/responsive-web-design" className="certification-link" rel="noopener noreferrer" target="_blank">Validate here</a></p>
                      </div>
                      <div className="edu-cert-item">
                        <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>JavaScript Algorithms and Data Structures Certification</p>
                        <p className="left-indent">@freeCodeCamp -- <a href="https://www.freecodecamp.org/certification/agusrichard21/javascript-algorithms-and-data-structures" className="certification-link" 
                        rel="noopener noreferrer" target="_blank">Validate here</a></p>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}