import { faFacebook, faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
faLinkedinIn


function Footer() {
  return (
    <>
    <hr />
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-md-3">
                <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-3'/> Media Player</h4>
                <p style={{textAlign: 'justify'}} className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam aut nihil asperiores cumque. Sunt, sit aliquam sed corrupti beatae perspiciatis? Vel ijsfbnbb </p>

            </div>
            <div className='col-md-1'></div>
            <div className="col-md-2">
               
                    <h4>Links</h4>
                    <ul className='list-unstyled'>
                        <Link to={'/'}><li className='mt-4 mb-3'>Landing Page</li></Link>
                        <Link to={'/home'}><li className='mb-3'>Home</li></Link>
                        <Link to={'/watchhistory'}><li>Watch History</li></Link>
                    </ul>
                

            </div>
            
            <div className="col-md-2">
                <h4>Guides</h4>
                <ul className='list-unstyled'>
                        <li className='mt-4 mb-3'>React</li>
                        <li className='mb-3'>React Bootstrap</li>
                        <li>Bootswatch</li>
                    </ul>


            </div>
            <div className="col-md-4">
                <h4>Contact Us</h4>
                <div className='d-flex justify-content-between mt-4'>
                    <input type="text" placeholder='Email ID' className='form-control w-75 me-2' />
                    <button className='btn btn-warning'>Subscribe</button>
                    
                </div>
                <div className='d-flex justify-content-between mt-4'>
                    <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
                        <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
                        <FontAwesomeIcon icon={faFacebook}className='fa-2x' />
                        <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x'/>
                        <FontAwesomeIcon icon={faGithub} className='fa-2x'/>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
