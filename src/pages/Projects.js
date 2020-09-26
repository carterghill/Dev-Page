import React from 'react';
import Section from '../Components/Section'
import '../App.css';

function App() {
  return (
    <div>

        <div className='header'>What Have I Been Up To?</div>

        <Section id='section1' title='Bobby Big Bot (Discord)'
                       github='https://github.com/carterghill/BobbyBigBot'
                       img='discord.png'
                       info="Bobby is a custom made Discord bot that moderates my Discord server.
                       Users can ask him to assign them any role they want, and moderators (or senators) can ban people
                       from specific roles. Having originally been made for my Melee server,
                       you can also ask him for frame data on any melee character.
                       Coded with the DiscordJS component of NodeJS"
               />

    </div>
  );
}

export default App;
