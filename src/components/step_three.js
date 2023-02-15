/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/step_three.css';
import Modal from './modal';

const StepThree = () => {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const safePath = require.context("../assets/", true);

  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <>
      {
        isOpen && <Modal/>
      }
      <main className='main-step-three'>
        <div className='main-step-three-gift'>
          <img src={safePath('./gift.png')} alt='' />
          <p>Si deseas obsequiarnos algo</p>
          <p>podes colaborar con nuestra lista de regalos</p>
          <button className='secondary-button' onClick={openModal}>Ver lista</button>
        </div>
        <div className='main-step-three-dresscode'>
          <p>Dresscode:</p>
          <p>Formal/Elegante</p>
          <img src={safePath('./dresscode.png')} alt='' />
        </div>
        <div className='main-step-three-music'>
          <img src={safePath('./corchea.png')} alt='' />
          <p>¿Qué canciones no pueden faltar?</p>
          <input type='text' placeholder='Nombre de la canción' />
          <button className='secondary-button'>Enviar</button>
        </div>
        <div className='main-step-three-confirm'>
          <p>Gracias por acompañarnos en este momento tan especial.</p>
          <p>¡Te esperamos!</p>
          <button className='primary-button'>Confirmar invitación</button>
        </div>
      </main>
    </>
  )
}

export default StepThree