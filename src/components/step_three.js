/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/step_three.css';
import Modal from './modal';

const StepThree = () => {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const safePath = require.context("../assets/", true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const sendConfirm = () => {
    window.location.href = 'https://wa.me/+5491122728456?text=hola';
  }

  const gotoPlaylist = () => {
    window.location.href = 'https://open.spotify.com/playlist/4LEY9tANEHErwID0RXSEz4?si=ba12c5650cf0409b';
  }

  return (
    <>
      {
        isOpen && <Modal toggleModal={toggleModal}/>
      }
      <main className='main-step-three'>
        <div className='main-step-three-gift'>
          <img src={safePath('./gift.png')} alt='' />
          <p>Si deseas obsequiarnos algo</p>
          <p>podés colaborar con nuestra lista de regalos</p>
          <button className='secondary-button' onClick={toggleModal}>Ver lista</button>
        </div>
        <div className='main-step-three-dresscode'>
          <p>Dresscode:</p>
          <p>Formal/Elegante</p>
          <img src={safePath('./dresscode.png')} alt='' />
        </div>
        <div className='main-step-three-music'>
          <img src={safePath('./corchea.png')} alt='' />
          <p>¿Qué canciones no pueden faltar?</p>
          <button className='secondary-button' onClick={gotoPlaylist}>¡Agregala a la playlist!</button>
        </div>
        <div className='main-step-three-confirm'>
          <p>Gracias por acompañarnos en este momento tan especial.</p>
          <p>¡Te esperamos!</p>
          <button className='primary-button' onClick={sendConfirm}>Confirmar invitación</button>
        </div>
      </main>
    </>
  )
}

export default StepThree;