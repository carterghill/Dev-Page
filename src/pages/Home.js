import React from 'react';
import Slogan from '../Components/Slogan'
import '../App.css';
import './Home.css';

function App() {
  return (
    <div>
        <div className='header'>Web Design, Full Stack, and Custom App Developement</div>

        <div className="homeSlogans">
          <Slogan title='Tailored For You'
                  img='tielogo.png'
                  info="Some developers do too much, some do too little. I will make sure that your custom app or website is suited for your needs."
          />
          <Slogan title='Efficient Code'
                  img='codelogo.png'
                  info="Having been educated in computer science, I am trained to used the best methods for creating fast, effective software"
          />
          <Slogan title='Tailored For You'
                  img='tielogo.png'
                  info="hi"
          />
        </div>

    </div>

  );
}

export default App;
