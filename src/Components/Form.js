import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form className='form'>
                <div className='formHeader'>Hello {this.state.username}</div>
                <div className='formInput'>Enter your name:</div>
                <input className='formInput'
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

export default ContactForm
