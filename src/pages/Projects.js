import React from 'react';
import Section from '../Components/Section'
import './Projects.css'
import '../App.css';

function App() {
  return (
    <div>

        <div className='header'>What Have I Been Up To?</div>

        <Section id='section1' title='Bobby Big Bot (Discord)'
                       github='https://github.com/carterghill/BobbyBigBot'
                       img='discord.png'
                       side='left'
                       website='none'
        >
          Bobby is a custom made Discord bot that moderates my Discord server.
          Users can ask him to assign them any role they want, and moderators (or senators) can ban people
          from specific roles. Having originally been made for my Melee server,
          you can also ask him for frame data on any melee character.
        </Section>

         <Section id='section2' title='Love Hertz (Love2D)'
                        github='https://github.com/carterghill/LoveHertz2.0'
                        img='love2d.png'
                        side='right'
                        website='none'
          >
            A 2D Jump n Shoot game engine and map editor. Gameplay is
            heavily inspired by Megaman and the map editing is similar to what you would
            see in games like Mario Maker. The project is still in it's very early stages,
            but at the moment it's possible to save and load custom levels, and even import your own tiles.
          </Section>
    </div>
  );
}

export default App;
