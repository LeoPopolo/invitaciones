/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../styles/step_one.css';

const StepOne = () => {
  const safePath = require.context("../assets/", true);

  const gotoFiestita = () => {
    window.location.href = "https://goo.gl/maps/xhxDSiCnrwXsz6YF6";
  }

  const gotoCivil = () => {
    window.location.href = "https://goo.gl/maps/XjuQrsPSJMLCQx5A6";
  }

  return (
    <main className='main-step-one'>
      <img className='hojas-1' src={safePath(`./hojitas.png`)} alt=''/>
      <div>
        <h2>Civil</h2>
        <p>El civil se realizará el día 21 de abril a las 10:30hs en el registro civil de quilmes</p>
        <button className='primary-button' onClick={gotoCivil}>Cómo llegar</button>
      </div>

      <div>
        <h2>Ceremonia y fiesta</h2>
        <p>Celebramos nuestro casamiento el 23 de Abril a las 12:00hs en Estancia Amelie, Ministro Rivadavia.
           ¡Te esperamos!</p>
        <button className='primary-button' onClick={gotoFiestita}>Cómo llegar</button>
      </div>
      
      <img className='hojas-2' src={safePath(`./hojitas2.png`)} alt=''/>
    </main>
  )
}

export default StepOne