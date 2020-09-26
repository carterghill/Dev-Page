import React from 'react';
import './Section.css';
import Image from './Image'

class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.props = {  title: 'default\n',
                    img: '',
                    info: '',
                    id: '',
                    github: ''
                };

  }

  render() {
    return (
      <div id={this.props.id} className='section' >

          <div className='sectionText'>
            <div className='sectionTitle'>
              {this.props.title}
            </div>

            <div className='sectionInfo'>
              {this.props.info}
            </div>
          </div>

          <div className='sectionIcon'>
            <Image className='sectionImg' img={this.props.img} />
            <div className={ this.props.github === '' ? 'invis' : '' } >
              Github: <a href={this.props.github}>Here</a>
            </div>
          </div>


      </div>

    );
  }
}

export default Slogan;
