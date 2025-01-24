import React from 'react'
import './ContactUs.css'
const ContactUs: React.FC = () => {
    return (
        <div id='ContactUs'>
            <div className='container p-5'>
                <div className='text-center'>
                    <h1 className='display-3 fw-bold primary-red'>Contact Us</h1>
                    <p className='bg-white p-2 fs-5 primary-red mx-5 m-4'>Write us your concern and we will get back to you asap</p>
                </div>
                <div className=''>
                    <form className='d-flex col-12 flex-wrap'>

                        <div className='col-6 p-2'>
                            <label htmlFor='FirstName'>First Name</label>
                            <input type='text' name='FirstName' id='FirstName' placeholder='First Name' className='form-control py-3 rounded-0' />
                        </div>
                        <div className='col-6 p-2'>
                            <label htmlFor='LastName'>Last Name</label>
                            <input type='text' name='LastName' id='LastName' placeholder='Last Name' className='form-control py-3 rounded-0' />
                        </div>
                        <div className='col-6 p-2'>
                        <label htmlFor='Email'>Enter Your Email</label>
                        <input type='email' name='Email' id='Email' placeholder='Enter Your Email' className='form-control py-3 rounded-0' />
                        </div>
                        <div className='col-6 p-2 '>
                        <label htmlFor='MobileNumber'>Enter Your Phone</label>
                        <input type='text' name='MobileNumber' id='MobileNumber' placeholder='Enter Your Phone' className='form-control py-3 rounded-0' />
                        </div>

                        <div className="col-12 p-2">
                        <label htmlFor='Message'>Message</label>
                        <textarea name='Message' id='Message' placeholder='Message' rows={5} className='form-control rounded-0'></textarea>
                        </div>
                       <div className='d-flex justify-content-center w-100 p-2'>
                       <input type='submit' value="Submit Now" className='primary-red-bg fs-5 btn rounded-0 text-white py-3 px-5'/>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs