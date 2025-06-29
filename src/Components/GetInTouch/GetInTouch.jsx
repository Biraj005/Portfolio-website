import React from 'react'
import './GetInTouch.css'
function GetInTouch() {
  return (
    <div  className='main-container'>
        <div className='heading'><span>Get In Touch</span></div>
        <div className='get-in-touch-wraper'>
            <div className='lets-talk'><span className='lets-talk-span'>Let's Talk</span>
            <br />
            <p className='para'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <br />
            <div className="contact-details">
                <div className="contact-details-list"><img src="#" alt="phone" /><span>birajroy0007@gmail.com</span></div>
                <div className="contact-details-list"><img src="#" alt="email" /><span>7810941767</span></div>
                <div className="contact-details-list"><img src="#" alt="address" /><span>West Bengal,India</span></div>
            </div>
            </div>
            <div className='form'>
                <form action="">
                    <input type="text" placeholder='Enter your name' />
                    <input type="email"  placeholder='Enter your email'/>
                    <textarea name="message" placeholder='Enter you mesaage'></textarea>
                </form>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch