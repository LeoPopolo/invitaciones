/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/step_three.css';

const StepThree = () => {
  
  const safePath = require.context("../assets/", true);

  return (
    <main className='main-step-three'>
      <div className='main-step-three-gift'>
        <img src={safePath('./gift.png')} alt=''/>
        <p>Si nos querés hacer un regalo...</p>
        <button className='secondary-button'>Ver más</button>
      </div>
      <div className='main-step-three-dresscode'>
        <p>Dresscode:</p>
        <p>Formal/Elegante</p>
        <img src={safePath('./dresscode.png')} alt=''/>
      </div>
      <div className='main-step-three-music'>
        <img src={safePath('./corchea.png')} alt=''/>
        <p>¿Qué canciones no pueden faltar?</p>
        <input type='text' placeholder='Nombre de la canción'/>
        <button className='secondary-button'>Enviar</button>
      </div>
    </main>
  )
}

export default StepThree