import React from 'react'
import "../components/Footer.css"

const Footer = () => {
  return (
    <>
      <div className='check-out-style'>
          <div><input type="checkbox" /></div>
          <p>I consent to processing of my personal data entered above <br />
          for connexdotz to contact me.</p> 
      </div>
      <div className='check-out-style'>
          <div><input type="checkbox" /></div>
          <p>I would like to receive details about products, services and <br />
          events from connexdotz.</p> 
      </div>
      <div id='terms'>
        <p>For further details on how your personal data will be processed</p>
        <p>and how your consent can be managed,</p>
        <p>refer to the <b>Connex Dotz Privacy policy</b></p>
      </div>
      <div id='btn'>
        <button>Send request</button>
      </div>
    </>
  )
}

export default Footer
