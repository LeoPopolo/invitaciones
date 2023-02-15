/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from 'react';
import '../styles/header.css';

const Header = () => {

  const [days, setDays] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [seconds, setSeconds] = React.useState('');

  const getDateDiff = () => {
    
    var start_date = new Date();

    // var end_date = new Date('2023-04-23T12:00:00');
    var end_date = new Date('2023-04-23T12:00:00');

    var diff = end_date.getTime() - start_date.getTime();

    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    
    if (days < 10)
      days = '0' + days;

    hours = hours % 24;
    if (hours < 10)
      hours = '0' + hours;
    minutes = minutes % 60;
    if (minutes < 10)
      minutes = '0' + minutes;
    seconds = seconds % 60;
    if (seconds < 10)
      seconds = '0' + seconds;

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  useEffect(() => {
    setInterval(() => {
      getDateDiff();
    }, 200);
  });

  return (
    <header className='header'>
        <div className='blur'>
            <h1 className='title'>Leo y Jime</h1>
            <h2 className='subtitle'>¡Nos casamos!</h2>

            <div className='counter'>
              <div>
                <span className='number'>{days}</span>
                <span className='description'>{ days === '01' ? 'día' : 'días'}</span>
              </div>
              <div>
                <span className='number'>{hours}</span> 
                <span className='description'>{ hours === '01' ? 'hora' : 'horas' }</span>
              </div>
              <div>
                <span className='number'>{minutes}</span>       
                <span className='description'>{ minutes === '01' ? 'minuto' : 'minutos' }</span>
              </div>
              <div>
                <span className='number'>{seconds}</span>
                <span className='description'>{ seconds === '01' ? 'segundo' : 'segundos' }</span>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header