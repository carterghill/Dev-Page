import React from 'react';
import DownloadLink from "react-download-link";

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Section.css';
import Image from './Image'

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.props = {  title: 'default\n',
                    img: '',
                    info: '',
                    id: '',
                    github: 'none',
                    side: 'left',
                    website: '',
                    download: true,
                    windows: "",
                    mac: "",
                    linux: "",
                    demo: ""
                };

  }

  render() {
    return (

      <div id={this.props.id} className={ this.props.side === 'right' ? 'section right' : 'section' } >

          <div className={ this.props.side === 'right' ? 'sectionIcon' : 'invis' }>
            <Image className='sectionImg' img={this.props.img} />
            <div className={ typeof this.props.github === "undefined" ? 'invis' : 'link' } >
              Github: <a href={this.props.github}>Here</a>
            </div>
            <div className={ typeof this.props.website === "undefined" ? 'invis' : 'link' } >
              Website: <a href={this.props.website}>Here</a>
            </div>

            <div className={ typeof this.props.mac === "undefined" &&
                             typeof this.props.windows === "undefined" &&
                             typeof this.props.linux === "undefined" ? 'invis' : 'link' } >
              Demo: <Link to="/Downloads/Love Hertz.zip" target="_blank" download>PC</Link>
            </div>

            <div dangerouslySetInnerHTML={{__html: this.props.demo}} />

          </div>

          <div className='sectionText'>
            <div className='sectionTitle'>
              {this.props.title}
            </div>

            <div className='sectionInfo'>
              {this.props.children}
            </div>
          </div>

          <div className={ this.props.side === 'right' ? 'invis' : 'sectionIcon' }>
            <Image className='sectionImg' img={this.props.img} />
            <div className={ typeof this.props.github === "undefined" ? 'invis' : 'link' } >
              Github: <a href={this.props.github}>Here</a>
            </div>
            <div className={ typeof this.props.website === "undefined" ? 'invis' : 'link' } >
              Website: <a href={this.props.website}>Here</a>
            </div>

            <div className={ typeof this.props.mac === "undefined" &&
                             typeof this.props.windows === "undefined" &&
                             typeof this.props.linux === "undefined" ? 'invis' : 'link' } >
              Demo: <Link to={this.props.windows} target="_blank" download>PC</Link>
            </div>

            <div dangerouslySetInnerHTML={{__html: this.props.demo}} />

          </div>


      </div>

    );
  }
}

export default Section;
