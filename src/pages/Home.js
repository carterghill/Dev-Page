import React, { Component } from 'react';
import Slogan from '../Components/Slogan'
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
                return
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
        this.setState({ timer: this.state.timer + 10000 });
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
                  img='codelogo.png'
                  info="Educated in computer science, I am trained to use the best algorithms for fast, effective software."
          />
          <Slogan id={ this.state.slogan3Class } title='Beautiful Design'
                  img='tielogo.png'
                  info="I have always believed in function over form. However, sometimes elegent form can bring great function."
          />
        </div>



    </div>

  )
}
}

export default Home;
