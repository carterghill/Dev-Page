import React from 'react';
import Section from '../Components/Section'
import './Resources.css';
import '../App.css';

function App() {
  return (
    <div>

        <div className='header'>What Software Have I been Using?</div>

        <Section id='section1' title='Atom'
                  website='https://atom.io/'
                  img='atom.png'
                  side='right'
        >
           "A hackable text editor for the 21st Century". Atom is a robust, multi-purpose
           text editor. It's high customizeability allows it to act as a simple text editor,
           or, if needed, as a full IDE for the language or platform of your choosing.
           It is best suited for those like me who prefer to take the time to get things the way they like
           them.
        </Section>

        <Section id='section2' title='Love2D'
                  website='https://love2d.org/'
                  img='love2d.png'
                  side='left'
        >
           A 2D game development framework that not only offers ease of coding with Lua,
           but also the lightning fast compilation of the JIT compiler. Great for beginners
           and advanced users, the ease of coding is great for learning the basics, but
           also has plenty of flexibility for advanced coder to build from.
        </Section>

    </div>

  );
}

export default App;
