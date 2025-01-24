import React from 'react'

const Features:React.FC = () => {
    return (
        <div>
            <div className="container text-center p-5">
                <div>
                    <h1 className='display-3 fw-bold'>Features</h1>
                    <p className='fs-3'>Below are the Features we have in our app.</p>
                </div>
                <div className='col-12 d-flex'>
                    <div className='col-3 p-4'><div className='col-12 bg-light py-4'>Profile Creation</div></div>
                    <div className='col-3 p-4'><div className='col-12 bg-light py-4'>AI Matchmaking</div></div>
                    <div className='col-3 p-4'><div className='col-12 bg-light py-4'>Priority</div></div>
                    <div className='col-3 p-4'><div className='col-12 bg-light py-4'>Communication</div></div>
                </div>
            </div>
        </div>
    )
}

export default Features