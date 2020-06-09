import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import { Element } from 'react-scroll'


export default class Projects extends React.Component {

  state = {
    isFsd: true,
    num: 0,
    fsd: [
      {
        title: 'Lecker Backend',
        img: 'projects/lecker_backend.png',
        repoLink: 'https://github.com/agusrichard/food-delivery-app',
        displayLink: 'http://3.88.30.184:5000/'
      },
      {
        title: 'Lecker Frontend',
        img: 'projects/lecker_frontend.png',
        repoLink: 'https://github.com/agusrichard/food-delivery-app',
        displayLink: 'http://3.88.30.184:5000/'
      },
      {
        title: 'Iris Backend',
        img: 'projects/iris_backend.png',
        repoLink: 'https://github.com/agusrichard/iris-classification-backend',
        displayLink: 'https://github.com/agusrichard/iris-classification-backend'
      },
      {
        title: 'Iris Frontend',
        img: 'images/projects.jpg',
        repoLink: 'https://github.com/agusrichard/iris-classification-frontend',
        displayLink: 'https://github.com/agusrichard/iris-classification-frontend'
      },
      {
        title: 'ReadMe App',
        img: 'projects/readme_app.jpg',
        repoLink: 'https://github.com/treidoristivan/Readme.Inc',
        displayLink: 'https://bit.ly/2yhrdsH'
      },
      {
        title: 'NaChat App',
        img: 'projects/nachat_app.jpg',
        repoLink: 'https://github.com/agusrichard/Na-chat-app',
        displayLink: 'https://bit.ly/34JYAkp'
      },
      {
        title: 'Lecker Mobile App',
        img: 'projects/lecker_mobile.jpg',
        repoLink: 'https://github.com/agusrichard/lecker-mobile-app',
        displayLink: 'https://bit.ly/3acwXBo'
      }
    ],
    ds: [
      {
        title: 'Machine Learning From Scratch',
        img: 'projects/ml_from_scratch.png',
        repoLink: 'https://github.com/agusrichard/machine-learning-implementation-from-scratch',
        displayLink: 'https://github.com/agusrichard/machine-learning-implementation-from-scratch'
      },
      {
        title: 'Loan Prediction',
        img: 'projects/loan_prediction.png',
        repoLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Loan%20Prediction',
        displayLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Loan%20Prediction'
      },
      {
        title: 'Nobel Prize EDA',
        img: 'projects/nobel_prize.png',
        repoLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Nobel%20Prize%20Winners',
        displayLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Nobel%20Prize%20Winners'
      },
      {
        title: 'Fashion MNIST Prediction',
        img: 'projects/fashion_mnist.png',
        repoLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Fashion%20MNIST',
        displayLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Fashion%20MNIST'
      },
      {
        title: 'Boston Housing Prediction',
        img: 'projects/boston_housing.png',
        repoLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Boston%20Housing',
        displayLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Boston%20Housing'
      },
      {
        title: 'Wine Quality EDA',
        img: 'projects/wine_quality.png',
        repoLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Red%20Wine%20Quality',
        displayLink: 'https://github.com/agusrichard/data-science-projects/tree/master/Red%20Wine%20Quality'
      }
    ]
  }

  render() {
    console.log('this.state.num', this.state.num, this.state.ds.length)
    return (
      <Element name="projects">
        <div id="projects" className="projects-bg">
          <div className="projects">
            <div className="container">
              <Slide top>
                <h1 className="title">Projects</h1>
              </Slide>
              <div className="projects-container">
                <Zoom>
                  <div style={{ textAlign: 'center' }}>
                    <span className={!this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: true, num: 0})}>Full Stack</span>
                    <span className={this.state.isFsd ? 'project-type': 'project-type active'} onClick={() => this.setState({isFsd: false, num: 0})}>Data Science</span>
                  </div>
                </Zoom>
                { this.state.isFsd ?
                  <Slide right>
                    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                      {
                        this.state.fsd.slice(this.state.num, this.state.num + 4 < this.state.fsd.length ? this.state.num + 4 : this.state.fsd.length).map(item => {
                          return (
                            <div className="project-item">
                              <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
                              <img src={require(`../assets/${item.img}`)} style={{ width: '250px', height: '150px', display: 'block' }} />
                              <a href={item.repoLink} className="project-link" rel="noopener noreferrer" target="_blank">Github Repo</a>
                              <a href={item.displayLink} className="project-link" rel="noopener noreferrer" target="_blank">Display</a>
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
                              <img src={require(`../assets/${item.img}`)} style={{ width: '250px', height: '150px', display: 'block' }} />
                              <a href={item.repoLink} className="project-link" rel="noopener noreferrer" target="_blank">Github Repo</a>
                              <a href={item.displayLink} className="project-link" rel="noopener noreferrer" target="_blank">Display</a>
                            </div>
                          )
                        })
                      } 
                    </div>
                  </Slide> 
                }
                <Zoom>
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
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}