import React, { Component } from 'react';
import { NavItems } from "./NavItems";
import MenuIcon from "./MenuIcon"
import { Button } from "./Button"
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

                    <div className={ this.state.clicked ? 'logo active' : 'logo' }><h2>Carter H.</h2></div>

                    <div className={ this.state.clicked ? 'menu-icon active' : 'menu-icon' }
                    onClick={this.handleClick}>< MenuIcon /></div>

                        <ul className='top-list'>
                            {NavItems.map((item, index) => {
                                return (
                                    <li className='item'><a className='item-link'
                                    href={item.url}>{item.title}</a></li>
                                )
                            })}
                            <li className="button"><Button >Contact</Button></li>
                        </ul>


                </div>

                <div className={ this.state.clicked ? 'menu active' : 'menu' }>
                    <ul className='list'>
                        {NavItems.map((item, index) => {
                            return (
                                <li className='item'><a className='item-link'
                                href={item.url}>{item.title}</a></li>
                            )
                        })}
                        <li className="button"><Button >Contact</Button></li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Navbar
