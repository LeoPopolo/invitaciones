import './App.css';
import Header from './components/header';
import StepOne from './components/step_one';
import StepTwo from './components/step_two';
import StepThree from './components/step_three';

function App() {
  const path = window.location.pathname;
  const showCivil = path.slice(path.indexOf('c=') + 2, path.indexOf('c=') + 3);
  const phoneNumber = path.slice(path.indexOf('t=') + 2, path.indexOf('t=') + 3) === 'l' ? '+5491122728456' : '+5491131823587';

  localStorage.setItem('sc', showCivil);
  localStorage.setItem('tel', phoneNumber);

  return (
    <>
      <Header/>
      <StepOne />
      <StepTwo />
      <StepThree />
    </>
  );
}

export default App;
