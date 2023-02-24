/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/step_three.css';
import Modal from './modal';
import Gift from './gift';
import { MdDelete, MdEdit } from 'react-icons/md';

const StepThree = () => {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedGift, setSelectedGift] = React.useState(null);
  const safePath = require.context("../assets/", true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const sendConfirm = () => {
    
    let text = '¡Confirmo la invitación!';
    const number = localStorage.getItem('tel');
 
    if (selectedGift)
      text += ` Mi regalo es: ${selectedGift.name}.`;

    window.location.href = `https://wa.me/${number}?text=${text}`;
  }

  const gotoPlaylist = () => {
    window.location.href = 'https://open.spotify.com/playlist/4LEY9tANEHErwID0RXSEz4?si=nA8zwIh3T9GvgCiQvO8FeQ&pt=b549926cbbddb9b332182fb0eab614bf';
  }

  const getGift = (item) => {
    setSelectedGift(item);
    toggleModal();
  }

  const deleteSelectedGift = () => {
    setSelectedGift(null);
  }

  return (
    <>
      {
        isOpen && 
        <Modal 
          toggleModal={toggleModal}
          getGift={getGift}
        />
      }
      <main className='main-step-three'>
        <div className='main-step-three-music'>
          <img src={safePath('./corchea.png')} alt='' />
          <p>¿Qué canciones no pueden faltar?</p>
          <button className='secondary-button' onClick={gotoPlaylist}>¡Agregala a la playlist!</button>
        </div>
        <div className='main-step-three-dresscode'>
          <p>Dresscode:</p>
          <p>Formal/Elegante</p>
          <img src={safePath('./dresscode.png')} alt='' />
        </div>
        <div className='main-step-three-gift'>
          <img src={safePath('./gift.png')} alt='' />
          <p>Si deseas hacernos un regalo</p>
          <button className='secondary-button' onClick={toggleModal}>Ver lista</button>
        </div>
        {
          selectedGift && 
          <div className='main-step-three-selected-gift'>
            <h3>El regalo que seleccionaste es</h3>
            <Gift
              name={selectedGift.name}
              path={selectedGift.path}
            />
            <div className='actions'>
              <MdDelete className='delete' onClick={deleteSelectedGift}/>
              <MdEdit className='edit' onClick={toggleModal}/>
            </div>
          </div>
        }
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