import React from 'react'


export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="contact-bg">
        <div className="contact">
          <div className="container">
            <h1 className="title">Contact</h1>
            <div className="contact-container">
              <div style={{ width: '60%'}}>
                <div className="contact-item">
                  <p>Email: <span>agus.richard21@gmail.com</span></p>
                </div>
                <div className="contact-item">
                  <p>Phone: <span>085710276393</span></p>
                </div>
                <div className="contact-item">
                  <p>Address: <span>Depok, Jawa Barat</span></p>
                </div>
              </div>
              <div className="contact-text-container">
                <p>
                  Please contact me by Email, Phone, or WhatsApp.
                  I'll do my best to answer your questions and I am ready to be a great asset for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}