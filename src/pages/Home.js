import React, { Component } from 'react';
import Slogan from '../Components/Slogan'
import '../App.css';
import './Home.css';

class Home extends Component {

    state = {
        timerStart: Date.now(),
        time: 0
    };

    timer = setInterval(() => {
        this.setState({
            time: Date.now() - this.state.timerStart
        });
        if (this.state.time > 30000) {
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
          <Slogan id={ this.state.time < 10000 ? 'slogan1' : 'slogan1Out' } title='Tailored For You'
                  img='tielogo.png'
                  onClick={this.handleClick}
                  info="Some developers do too much, some do too little. I will make sure that your custom app or website is suited for your needs."
          />
          <Slogan id={ this.state.time < 20000 && this.state.time > 10000 ? 'slogan2' : 'slogan2Out' } title='Efficient Code'
                  img='codelogo.png'
                  info="Educated in computer science, I am trained to use the best algorithms for fast, effective software."
          />
          <Slogan id={ this.state.time < 30000 && this.state.time > 20000 ? 'slogan3' : 'slogan3Out' } title='Beautiful Design'
                  img='tielogo.png'
                  info="I have always believed in function over form. However, sometimes elegent form can bring great function."
          />
        </div>



    </div>

  )
}
}

export default Home;
