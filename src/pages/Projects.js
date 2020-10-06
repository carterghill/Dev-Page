import React from 'react';
import Section from '../Components/Section'
import DownloadLink from "react-download-link";
import './Projects.css'
import '../App.css';

function App() {
  return (
    <div>

        <div className='header'>What Have I Been Up To?</div>

        <Section id='proSection1' title='Rocket Girl'
                       github='https://github.com/joelghill/RocketGirl'
                       img='unity.png'
                       side='left'
                       demo="<a href=https://carterghill.github.io>Try Online!</a>"
        >
           CMPT 306 Game Design project that appears to be a simple 2D platformer at first glance,
           but it's got a mind-bending twist. Inspired heavily by an Indie game called Fez, Rocket Girl
           challenges the players understanding of 2D and 3D space with a few simple levels
           of puzzle platforming.
        </Section>

        <Section id='proSection2' title='Love Hertz (Love2D)'
                       github='https://github.com/carterghill/LoveHertz2.0'
                       img='love2d.png'
                       side='right'
                       windows='/Downloads/LoveHertz.exe'
        >
           A 2D Jump n Shoot game engine and map editor. Gameplay is
           heavily inspired by Megaman and the map editing is similar to what you would
           see in games like Mario Maker. The project is still in it's very early stages,
           but at the moment it's possible to save and load custom levels, and even import your own tiles.
        </Section>

        <Section id='proSection3' title='Bobby Big Bot (Discord)'
                       github='https://github.com/carterghill/BobbyBigBot'
                       img='discord.png'
                       side='left'
        >
          Bobby is a custom made Discord bot that moderates my Discord server.
          Users can ask him to assign them any role they want, and moderators (or senators) can ban people
          from specific roles. Having originally been made for my Melee server,
          you can also ask him for frame data on any melee character.
        </Section>

    </div>
  );
}

export default App;
