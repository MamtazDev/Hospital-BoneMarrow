import React, { Fragment } from 'react'
import img from '../../assets/images/fa-girl.png'
import './contact.css'
import supportImg from '../../assets/images/footer.png'


const Contact = () => {
  return (
     <Fragment>
        <div className="contact_section">
            <div className="container">
                <div className="contact_area"> 
                    <div className="contact_list">
                        <ul className='d-flex align-items-center justify-content-around'>
                            <li className='d-none d-lg-block'><p>GET <span>free</span> ASSISTANCE</p> <img src={supportImg} /> </li>
                            <li className='d-none d-lg-block'>
                              <p style={{ color:"#fff" }}> helpdesk@marlinmedicalassistance.com</p>
                            </li>
                            <li className='d-none d-lg-block'>
                                <a href="tel:+91 87500 42481"> +91- 8984 900 900</a>
                            </li>
                            <li className='d-block d-lg-none'><a href="#">ENQUIRE NOW</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </Fragment>
  )
}

export default Contact
