import React, { Component } from 'react';
import Slogan from '../Components/Slogan'
import Section from '../Components/Section'
import '../App.css';
import './Home.css';

class Home extends Component {

    state = {
        timerStart: Date.now(),
        time: 0,
        slogan1Class: 'slogan1Start',
        slogan2Class: 'slogan2Start',
        slogan3Class: 'slogan3Start'
    };

    timer = setInterval(() => {
        this.setState({
            time: Date.now() - this.state.timerStart
        });
        if (this.state.time < 7000) {
            this.setState({ slogan1Class: 'slogan1' });
            if (this.state.slogan2Class === 'slogan2Start') {
                return;
            }
            this.setState({
                slogan2Class: 'slogan2Out',
                slogan3Class: 'slogan3Out'
            });
        } else if (this.state.time < 14000) {
            this.setState({
                slogan1Class: 'slogan1Out',
                slogan2Class: 'slogan2'
            });
        } else if (this.state.time < 21000 && this.state.time > 14000) {
            this.setState({
                slogan1Class: 'slogan1Out',
                slogan2Class: 'slogan2Out',
                slogan3Class: 'slogan3'
            });
        } else if (this.state.time > 21000) {
            this.setState({
                time: 0,
                timerStart: Date.now()
            });
        }

    }, 10);

    handleClick = () => {
        this.setState({ timer: this.state.timer + 7000 });
    }

render () {
  return (
    <div>

        <div className='header'>Web Design, Full Stack, and Custom App Developement</div>

        <div onClick={this.handleClick} className="homeSlogans">
          <Slogan id={ this.state.slogan1Class } title='Tailored For You'
                  img='tielogo.png'
                  onClick={this.handleClick}
                  info="Some developers do too much, some do too little. I will make sure that your custom app or website is suited for your needs."
          />
          <Slogan id={ this.state.slogan2Class } title='Efficient Code'
            onClick={this.handleClick}
                  img='codelogo.png'
                  info="Educated in computer science, I am trained to use the best algorithms for fast, effective software."
          />
          <Slogan id={ this.state.slogan3Class } title='Beautiful Design'
                  onClick={this.handleClick}
                  img='tielogo.png'
                  info="I have always believed in function over form. However, sometimes elegent form can bring great function."
          />
        </div>

        <div className="homeSections">
            <Section id='homeSection' title='Bobby Big Bot (Discord)'
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

           <Section id='homeSection2' title='Love Hertz (Love2D)'
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

    </div>

  )
}
}

export default Home;
