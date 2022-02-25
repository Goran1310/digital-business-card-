import React from 'react';

export default function Info() {
    return (
        <div className='info-wrapper'>
            <img className='headshot-img' src='../images/IMG_5470opt.jpg'/>
            <div className='info-container'>
                <h1 className='name'>Goran Lovincic</h1>
                <h2 className='title'>Frontend Developer</h2>
                <a className='portfolio-link' href='https://www.goranlovincic.com'>goranlovincic.com</a>
                <a className='email-btn' href='mailto:lovincic@gmail.com'>
                    <img className='envelope-img' src='../images/envelope-icon.png'/>
                Email</a>
            </div>
        </div>
    )
}