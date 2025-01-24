import React from 'react';
import './SuccessStories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const SuccessStories: React.FC = () => {
    return (
        <div>
            <div className='container p-5'>
                <div>
                    <h1 className='p-5 display-3 fw-bold text-center'>
                        Our Latest Success Stories
                    </h1>
                </div>
                <div className='d-flex flex-wrap col-12'>
                    <div className='col-6 d-flex justify-content-center align-items-center p-4 ssImage  border-top border-2  border-color'>
                        <img src='/successStories/successStories1.jpg' className=' img-fluid' />
                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center p-4 ssImage border border-end-0 border-bottom-0 border-2 border-color position-relative'>
                        <img src='/successStories/successStories2.jpg' className=' img-fluid' />
                        <div className='border-icon-circle position-absolute top-0 start-0 translate-middle'></div>
                        <div className=' position-absolute  top-50 start-0  translate-middle'>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="border-icon "
                            />
                        </div>

                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center p-4 ssImage border border-start-0 border-bottom-0 border-end-0 border-2 border-color'>
                        <img src='/successStories/successStories3.jpg' className=' img-fluid' />

                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center p-4 ssImage border border-end-0 border-bottom-0 border-2 border-color position-relative'>
                        <img src='/successStories/successStories4.jpg' className=' img-fluid' />
                        <div className='border-icon-circle position-absolute  start-0 translate-middle'></div>

                        <div className=' position-absolute  top-50 start-0  translate-middle'>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="border-icon "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories