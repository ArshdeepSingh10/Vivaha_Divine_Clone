import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
const Footer: React.FC = () => {
    return (
        <>
            <div className='footerImageBg position-relative'>
                <div className='Overlay'></div>
                <div className='container p-5'>
                    <div className='d-flex col-12 text-white pt-5 '>
                        <div className='z-2 col-4 text-start'>
                            <p className='fs-4 fw-semibold'>Links</p>
                            <ul className='list-unstyled fs-5'>
                                <li>About</li>
                                <li>Gallery</li>
                                <li>Story</li>
                                <li>Timeline</li>
                                <li>RSVP</li>
                                <li>Contact Us</li>
                                <li>Wedding-date</li>
                            </ul>
                        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
                        <div className='text-center z-2 col-4'>
                            <p className='fs-4 fw-semibold'>Mr<span className='primary-red'>&</span>Mrs</p>
                            <p className='fs-5'>
                                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tempor dui, non consectetur enim. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <div className='z-2 col-4 text-end'>
                            <div>
                                <p className='fw-semibold fs-4'>Follow Us</p>
                                <ul className='list-unstyled fs-5'>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                </ul>
                            </div>
                            <div>
                                <p className='fs-4'>Contact Us</p>
                            </div>
                            <div className='fs-5'>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {' '} info@example.com</p>
                                <p><FontAwesomeIcon icon={faPhone} />  {' '} (+012) 3456 7890 123</p>
                            </div>

                        </div>
                    </div>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className='d-flex primary-red justify-content-center align-items-center gap-2'>
                        <div className='z-2 bg-white p-2 px-3'>
                            <FontAwesomeIcon className='primary-red' icon={faFacebookF} />
                        </div>
                        <div className='z-2 bg-white p-2 px-3'>
                            <FontAwesomeIcon className='primary-red' icon={faXTwitter} />
                        </div>
                        <div className='z-2 bg-white p-2 px-3'>
                            <FontAwesomeIcon className='primary-red' icon={faInstagram} />
                        </div>
                        <div className='z-2 bg-white p-2 px-3'>
                            <FontAwesomeIcon className='primary-red' icon={faLinkedinIn} />
                        </div>
                    </div>
                </div>
            </div>

{/* ******************************************************************************************************************************************** */}
            <div className='footer-bg text-white'>
                <div className='d-flex justify-content-between container p-3 '>
                    <div>
                        <FontAwesomeIcon icon={faCopyright} />{' '}
                        <span className='primary-red'>Vivaha Divine</span>, All right reserved.</div>
                    <div>Designed By <span className='primary-red'>Arshdeep</span></div>
                </div>
            </div>
        </>
    )
}

export default Footer