import React, { useState } from 'react'


export default class Projects extends React.Component {

  state = {
    isFsd: true
  }

  render() {
    return (
      <div id="projects" className="projects-bg">
        <div className="projects">
          <div className="container">
            <h1 className="title">Projects</h1>
            <div className="projects-container">
              <div style={{ textAlign: 'center' }}>
                <span className={!this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: true})}>Full Stack</span>
                <span className={this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: false})}>Data Science</span>
              </div>
              { this.state.isFsd ?
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around' }}>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Project name</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Project name</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Project name</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Project name</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                </div> 
                : 
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around' }}>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Uhuy</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Uhuy</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Uhuy</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                  <div className="project-item">
                    <h3 style={{ textAlign: 'center' }}>Uhuy</h3>
                    <img src={require('../assets/images/projects.jpg')} style={{ width: '250px', height: '150px', display: 'block' }} />
                    <a href="#" className="project-link">Github Repo</a>
                    <a href="#" className="project-link">Display</a>
                  </div>
                </div>
              }
              <span className="more">More</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}