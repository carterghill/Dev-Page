import React from 'react';
import './Slogan.css';
import Image from './Image'

class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.props = {  title: 'default\n',
                    img: '',
                    info: '',
                    id: ''
                };

  }

  render() {
    return (
      <div id={this.props.id} className='slogan' >

          <div className='sloganTitle'>
            {this.props.title}
          </div>

          <Image className='sloganImg' img={this.props.img} />

          <div className='sloganInfo'>
            {this.props.info}
          </div>

      </div>

    );
  }
}

export default Slogan;
