import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


export default class Projects extends React.Component {

  state = {
    isFsd: true,
    num: 0,
    fsd: [
      {
        title: 'Project Name 1',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 2',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 3',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 4',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 5',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 6',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      }
    ],
    ds: [
      {
        title: 'Project Name 7',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 8',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 9',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 10',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 11',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 12',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 13',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 14',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 15',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      },
      {
        title: 'Project Name 16',
        img: 'projects.jpg',
        repoLink: '#',
        displayLink: '#'
      }
    ]
  }

  render() {
    console.log('this.state.num', this.state.num, this.state.ds.length)
    return (
      <div id="projects" className="projects-bg">
        <div className="projects">
          <div className="container">
            <h1 className="title">Projects</h1>
            <div className="projects-container">
              <div style={{ textAlign: 'center' }}>
                <span className={!this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: true, num: 0})}>Full Stack</span>
                <span className={this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: false, num: 0})}>Data Science</span>
              </div>
              { this.state.isFsd ?
                <Slide right>
                  <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                    {
                      this.state.fsd.slice(this.state.num, this.state.num + 4 < this.state.fsd.length ? this.state.num + 4 : this.state.fsd.length).map(item => {
                        return (
                          <div className="project-item">
                            <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
                            <img src={require(`../assets/images/${item.img}`)} style={{ width: '250px', height: '150px', display: 'block' }} />
                            <a href={item.repoLink} className="project-link">Github Repo</a>
                            <a href={item.repoLink} className="project-link">Display</a>
                          </div>
                        )
                      })
                    } 
                  </div>
                </Slide>
                :
                <Slide left>
                  <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                    {
                      this.state.ds.slice(this.state.num, this.state.num + 4 < this.state.ds.length ? this.state.num + 4 : this.state.ds.length).map(item => {
                        return (
                          <div className="project-item">
                            <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
                            <img src={require(`../assets/images/${item.img}`)} style={{ width: '250px', height: '150px', display: 'block' }} />
                            <a href={item.repoLink} className="project-link">Github Repo</a>
                            <a href={item.repoLink} className="project-link">Display</a>
                          </div>
                        )
                      })
                    } 
                  </div>
                </Slide> 
              }
              <div style={{ margin: 'auto', width: '150px', marginTop: '30px' }}>
                <FontAwesomeIcon 
                  icon={faChevronCircleLeft} 
                  className={
                    this.state.num - 4 < 0 ? 
                    'icon deactivate'
                    :
                    'icon'
                  } 
                  onClick={
                    this.state.num - 4 < 0 ?
                    null 
                    :
                    () => this.setState(prevState => ({num: prevState.num - 4}))
                  }
                />
                <FontAwesomeIcon 
                  icon={faChevronCircleRight} 
                  className={
                    this.state.isFsd ?
                      this.state.num + 4 > this.state.fsd.length ?
                        'icon deactivate'
                        :
                        'icon'
                    :
                      this.state.num + 4 > this.state.ds.length ?
                        'icon deactivate'
                        :
                        'icon'
                  }
                  onClick={
                    this.state.isFsd ?
                      this.state.num + 4 > this.state.fsd.length ?
                        null
                        :
                        () => this.setState(prevState => ({num: prevState.num + 4}))
                    :
                      this.state.num + 4 > this.state.ds.length ?
                      null
                      :
                      () => this.setState(prevState => ({num: prevState.num + 4}))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}