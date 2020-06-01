import React from 'react'


export default class Education extends React.Component {
  render() {
    return (
      <div id="education" className="education-bg">
        <div className="education">
          <div className="container">
            <h1 className="title">Educations and Certificates</h1>
            <div className="education-container">
              <div className="education-box">
                <h3 className="education-title">Educations</h3>
                <div>
                  <div className="edu-cert-item">
                    <p style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Arkademy Tech Education Platform</p>
                    <p className="left-indent">FullStack Development</p>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}