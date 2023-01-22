/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='blur'>
            <h1 className='title'>Leo y Jime</h1>
            <h2 className='subtitle'>¡Nos casamos!</h2>

            <div className='counter'>
              <div>
                <span className='number'>90</span>
                <span className='description'>días</span>
              </div>
              <div>
                <span className='number'>02</span> 
                <span className='description'>horas</span>
              </div>
              <div>
                <span className='number'>15</span>       
                <span className='description'>minutos</span>
              </div>
              <div>
                <span className='number'>25</span>
                <span className='description'>segundos</span>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header