import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
const SignIn: React.FC = () => {
    return (
        <div className='gray-400'>
            <div className='container'>
                <div id='sign-in' className='d-flex  justify-content-center align-items-center'>
                    <div className='bg-white rounded-2 col-4  shadow p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src='/Image/SignIn.png' className='img-fluid signImage rounded-2' />
                        </div>
                        <div className='text-center fw-semibold'>
                            <p>Sign in to your account</p>
                        </div>
                        <div className='pb-3'>
                            <form>
                                <div className='form-floating py-2'>
                                    <input type="text" name='PhoneNumber' id='PhoneNumber' className='form-control' placeholder='PhoneNumber' />
                                    <label htmlFor='PhoneNumber'>Phone Number</label>
                                </div>

                                <div className='form-floating py-2'>
                                    <input type="text" name='Password' id='Password' className='form-control' placeholder='Password' />
                                    <label htmlFor='Password'>Password</label>
                                </div>
                                <input type="submit" value='LOG IN' id='submit' className='form-control btn primary-red-bg text-white mt-2' />
                            </form>

                        </div>
                        <div className='d-flex flex-column text-center gap-2'>
                            <Link to='/sign-up' className='primary-red text-decoration-none fw-semibold'>I forgot my password</Link>

                            <Link to='/sign-up' className='primary-red text-decoration-none fw-semibold'>Register a new account</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn