import React from 'react';
import './Slogan.css';
import logo from './tielogo.png'

class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.props = {  title: 'default\n',
                    info: ''
                };

  }

  render() {
    return (
      <div className='slogan'>

          <div className='sloganTitle'>
            {this.props.title}
          </div>

          <img className='sloganImg' src={logo} ></img>

          <div className='sloganInfo'>
            {this.props.info}
          </div>

      </div>

    );
  }
}

export default Slogan;
