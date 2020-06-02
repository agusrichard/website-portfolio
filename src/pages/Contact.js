import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'


export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="contact-bg">
        <div className="contact">
          <div className="container">
            <Slide top>
              <h1 className="title">Contact</h1>
            </Slide>
            <div className="contact-container">
              <div style={{ width: '60%'}}>
                <Zoom>
                  <div className="contact-item">
                    <p>Email: <span>agus.richard21@gmail.com</span></p>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="contact-item">
                    <p>Phone: <span>085710276393</span></p>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="contact-item">
                    <p>Address: <span>Depok, Jawa Barat</span></p>
                  </div>
                </Zoom>
              </div>
              <Zoom>
                <div className="contact-text-container">
                  <p>
                    Please contact me by Email, Phone, or WhatsApp.
                    I'll do my best to answer your questions and I am ready to be a great asset for you.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    )
  }
}