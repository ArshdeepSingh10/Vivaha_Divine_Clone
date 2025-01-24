import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDungeon, faMenorah, faPhotoFilm, faRing } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react'

const Proccess:React.FC = () => {
    return (
        <div className='dal-green'>
            <div className="container p-5">
                <div>
                    <h1 className='text-center text-white display-3 fw-bold p-5'>
                        Our Simple Process
                    </h1>
                </div>
                <div className='col-12 d-flex'>
                    <div className='col-3 text-center border border-bottom-0 p-3 position-relative'>
                        <div className='fs-1 primary-red'>
                        <FontAwesomeIcon icon={faMenorah} />
                        </div>
                        <div>
                            <h1 className='fs-3'>
                            Create Profile
                            </h1>
                            <div>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                            </div>
                        </div>
                        <div className='empty-circle-icon-start translate-middle'>                   
                        </div>
                    </div>
                    <div className='col-3 text-center border-bottom p-3'>
                        <div className='fs-1 primary-red'>
                        <FontAwesomeIcon icon={faPhotoFilm} />
                        </div>
                        <div>
                            <h1 className='fs-3'>
                            Get Approval
                            </h1>
                            <div>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 text-center border border-bottom-0 p-3'>
                        <div className='fs-1 primary-red'>
                        <FontAwesomeIcon icon={faDungeon} />
                        </div>
                        <div>
                            <h1 className='fs-3'>
                            Start Searching
                            </h1>
                            <div>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 text-center border-bottom border-end p-3 position-relative' >
                        <div className='fs-1 primary-red'>
                        <FontAwesomeIcon icon={faRing} />
                        </div>
                        <div>
                            <h1 className='fs-3'>
                            Get Married
                            </h1>
                            <div>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                            </div>
                            <div className='empty-circle-icon-end translate-middle'>                   
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proccess