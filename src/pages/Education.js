import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'


export default class Education extends React.Component {
  render() {
    return (
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
                      <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Arkademy Tech Education Platform</p>
                      <p className="left-indent">Full Stack Development</p>
                    </div>
                    <div className="edu-cert-item">
                      <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>DataCamp</p>
                      <p className="left-indent">Data Science and Data Analyst with Python</p>
                    </div>
                    <div className="edu-cert-item">
                      <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>freeCodeCamp</p>
                      <p className="left-indent">Web Design, API and Microservices</p>
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
                      <p className="left-indent">@DataCamp -- <a href="#" className="certification-link">Validate here</a></p>
                    </div>
                    <div className="edu-cert-item">
                      <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Responsive Web Design Certification</p>
                      <p className="left-indent">@freeCodeCamp -- <a href="#" className="certification-link">Validate here</a></p>
                    </div>
                    <div className="edu-cert-item">
                      <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>JavaScript Algorithms and Data Structures Certification</p>
                      <p className="left-indent">@freeCodeCamp -- <a href="#" className="certification-link">Validate here</a></p>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    )
  }
}