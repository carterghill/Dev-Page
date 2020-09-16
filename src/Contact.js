import React from 'react';
import ContactForm from './Components/Form'

import './App.css';

function App() {
  return (
    <div>

        <div className='header'>Want to get in touch? Please enquire below.</div>

        <div className='body'>

            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in a type specimen book.

            <div style={{marginTop:2+'em'}}>
                <div className='contact'>
                    <ContactForm/>
                </div>
                <div className='contactDetails'>2</div>
            </div>

        </div>

        <div className='contact'>1</div>

    </div>
  );
}

export default App;
