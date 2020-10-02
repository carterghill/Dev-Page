import React from 'react';
import Section from '../Components/Section'
import '../App.css';

function App() {
  return (
    <div>

        <div className='header'>What Software Have I been Using?</div>

        <Section title='Atom'
                  website='https://atom.io/'
                  img='atom.png'
                  side='right'
                  github='none'
        >
           "A hackable text editor for the 21st Century". Atom is a robust, multi-purpose
           text editor. It's high customizeability allows it to act as a simple text editor,
           or, if needed, as a full IDE for the language or platform of your choosing.
           It is best suited for those like me who prefer to take the time to get things the way they like
           them.
        </Section>

    </div>

  );
}

export default App;
