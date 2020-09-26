import React from 'react';
import Slogan from '../Components/Slogan'
import '../App.css';
import './Home.css';

function App() {
  return (
    <div>
        <div className='header'>Web Design, Full Stack, and Custom App Developement</div>

        <div className="homeSlogans">
          <Slogan id='slogan1' title='Tailored For You'
                  img='tielogo.png'
                  info="Some developers do too much, some do too little. I will make sure that your custom app or website is suited for your needs."
          />
          <Slogan id='slogan2' title='Efficient Code'
                  img='codelogo.png'
                  info="Educated in computer science, I am trained to use the best algorithms for fast, effective software."
          />
          <Slogan id='slogan3' title='Beautiful Design'
                  img='tielogo.png'
                  info="I have always believed in function over form. However, sometimes elegent form can bring great function."
          />
        </div>



    </div>

  );
}

export default App;
