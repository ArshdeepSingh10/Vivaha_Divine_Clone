import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
const SignUp: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<String | null>(null)
    const handleRadioClick = (type: string) => {
       setSelectedGender(type);
    };

    return (
        <div className='gray-400'>
            <div className='container p-5'>
                <div id='sign-up' className='d-flex  justify-content-center align-items-center'>
                    <div className='bg-white rounded-2 col-sm-12 col-md-8 col-lg-5 shadow p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src='/Image/SignIn.png' className='img-fluid signImage rounded-2' />
                        </div>
                        <div className='text-center fw-semibold'>
                            <p>Create a new account</p>
                        </div>
                        <div className='pb-3'>
                            <form>
                                <div className='form-floating py-2'>
                                    <input type="text" name='Name' id='Name' className='form-control' placeholder='Whatsapp Number' />
                                    <label htmlFor='Name'>Name </label>
                                    <span className='light-gray'>
                                        <FontAwesomeIcon icon={faCircleInfo} />   Mobile number will be used to login to your account.
                                    </span>
                                </div>
                                <div className='form-floating py-2'>
                                    <input type="text" name='PhoneNumber' id='PhoneNumber' className='form-control' placeholder='Whatsapp Number' />
                                    <label htmlFor='PhoneNumber'>Whatsapp Number</label>
                                </div>
                                <div className='d-flex'>
                                    <div><img src='/Image/pic1-male.png' id='male-image' className={`img-fluid genderIcon  ${selectedGender === "male" ? "" : "genderIconColor"}`} onClick={() => handleRadioClick("male")} /></div>
                                    <div><img src='/Image/pic1-female.png' id='female-image' className={`img-fluid genderIcon  ${selectedGender === "female" ? "" : "genderIconColor"}`}  onClick={() => handleRadioClick("female")} /></div>

                                </div>
                                <div className='py-2 d-none'>
                                    <input type="radio" name='gender' id='male' value='male' className='form-check-input' checked={selectedGender=='male'} />
                                    <label htmlFor='male'>male</label>
                                    <input type="radio" name='gender' id='female' value='female' className='form-check-input' checked={selectedGender=='female'} />
                                    <label htmlFor='female'>female</label>
                                </div>
                                <div className='form-floating py-2'>
                                    <input type="text" name='Password' id='Password' className='form-control' placeholder='Password' />
                                    <label htmlFor='Password'>Password</label>
                                    <span className='light-gray'>
                                        <FontAwesomeIcon icon={faCircleInfo} />  Password should be minimum of 6 characters long.
                                    </span>
                                </div>
                                <div className='form-floating py-2'>
                                    <input type="text" name='ConfirmPassword' id='ConfirmPassword' className='form-control' placeholder='Confirm Password' />
                                    <label htmlFor='ConfirmPassword'>Confirm Password</label>
                                </div>
                                <span className='light-gray'>
                                    <i>By registering for an account, you consent to the terms and conditions of Vivaha Divine.</i>
                                </span>
                                <input type="submit" value='SUBMIT' id='submit' className='form-control btn primary-red-bg text-white mt-2' />
                            </form>

                        </div>
                        <hr />
                        <div className='d-flex flex-column text-center gap-2'>
                            <Link to='/sign-in' className='primary-red text-decoration-none fw-semibold'>I already have an account</Link>

                            <span className='light-gray'> Review Terms & Conditions on  <Link to='/login' className='primary-red text-decoration-none fw-semibold'>Vivahadivine.com</Link></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp