import React from 'react';
import Slogan from '../Components/Slogan'
import '../App.css';
import './Home.css';

function App() {
  return (
    <div>
        <div className='header'>Web Design, Full Stack, and Custom App Developement</div>

        <div className="homeSlogans">
          <Slogan title='Tailor-Fitted Code'
                  info="Some developers do too much, some do too little. I will make sure that your custom app or website is suited for your needs."
          />
        </div>

    </div>

  );
}

export default App;
