import React, { Component } from 'react';
import MenuIcon from "./MenuIcon"
import './Navbar.css'

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {

        return (
            <nav className='page'>

                <div className={ this.state.clicked ? 'top-bar active' : 'top-bar' }>
                    <div className={ this.state.clicked ? 'menu-icon active' : 'menu-icon' }
                    onClick={this.handleClick}>< MenuIcon /></div>
                </div>

                <div className={ this.state.clicked ? 'menu active' : 'menu' }>

                </div>

            </nav>
        )
    }
}

export default Navbar
